'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = 'white';
ctx.fillStyle = 'white';

// HEAD
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// BODY
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// HAT
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';

ctx.fillRect(123, 130, 150, 30); // bas
ctx.fillRect(152, 47, 90, 100); // haut

// LEFT ARM
ctx.lineWidth = 5; // largeur du bras
ctx.beginPath();
ctx.moveTo(132, 301);
ctx.lineTo(30, 230);
ctx.stroke();
ctx.fill();

// RIGHT ARM
ctx.lineWidth = 5; // largeur du bras
ctx.beginPath();
ctx.moveTo(256, 305);
ctx.lineTo(331, 267);
ctx.lineTo(370, 210);
ctx.stroke();

// EYES
ctx.beginPath();
ctx.arc(177, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(220, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// NOISE
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(199, 186);
ctx.lineTo(124, 211);
ctx.lineTo(199, 210);
ctx.quadraticCurveTo(203, 194, 199, 186);
ctx.stroke();
ctx.fill();

// SCARF
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';

ctx.fillRect(150, 225, 100, 30); // bas
//ctx.fillRect(152, 47, 90, 100); // haut

