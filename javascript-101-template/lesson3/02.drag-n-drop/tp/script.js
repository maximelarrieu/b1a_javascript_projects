'use strict';

// Formats acceptés d'images pouvant être drag and drop par le script
const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg'];
// Taille maximale des images
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb
// On sélectionne une id de notre .html et on l'assigne à une variable
const dropZone = document.querySelector('#js-drop-to');
// Idem, afin de pouvoir lui affecter des events
const filesList = document.querySelector('#js-file-list');

// On assigne l'évenement à notre id html à travers sa variable. Ici, permet de changer la couleur de la cible où l'on met nos images
dropZone.addEventListener('dragover', (e) => onDragOver(e));
// Accepte le dépot d'images
dropZone.addEventListener('drop', (e) => onDrop(e));
// Les images rentrent dans le dépôt
dropZone.addEventListener('dragenter', () => changeDropZoneState(true));
// Fin du drop on relâche la souris, les images sont déposés définitivement
dropZone.addEventListener('dragend', () => changeDropZoneState(false));

function onDragOver(event) {
  // Evite la propagation de l'event aux parents de la cible -> performances
  event.stopPropagation();
  // Si l'évènement ne se passe pas, pas d'action par défault  
  event.preventDefault();
}

function onDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  // Remplace le contenu par du html   
  filesList.innerHTML = '';
  // Créer une copie 
  const filesUploaded = Array.from(e.dataTransfer.files);
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
  changeDropZoneState(false);
}

function changeDropZoneState(isDragging) {
  isDragging ? 
    dropZone.classList.add('js-is-dragged-over') :
    dropZone.classList.remove('js-is-dragged-over');
}

function handleUploadedFile(file, index) {
  const error = getUploadError(file);
  error ?
    console.warn(`"${file.name}" Upload Error: ${error}`) :
    filesList.appendChild(createListEl(file, index));
}

function createListEl(file, index) {
  const el = document.createElement('li');
  el.setAttribute('id', 'file-list-item-'+index);
  el.className = 'list-group-item file-list-item';

  // add image
  const elPreview = document.createElement('img');
  elPreview.classList.add('file-list-item-preview');
  el.appendChild(elPreview);
  renderImage(file, 'file-list-item-'+index);

  // add name
  const elName = document.createElement('p');
  elName.classList.add('file-list-item-name');
  elName.innerText = file.name;
  el.appendChild(elName);

  return el;
}

function renderImage(file, elId) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.querySelector(`#${elId} img`);
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) {
    return 'Your image is too big';
  } else if (!ACCEPTED_FORMATS.includes(file.type)) {
    return 'Image of this format is not accepted';
  } else {
    return;
  }
}
