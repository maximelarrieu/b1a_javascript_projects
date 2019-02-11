'use strict';

if (navigator.geolocation) {
    const successCallBack = (position) => {
	console.log('position', position);
	const link = document.createElement('a');
	link.href = `https://www.latlong.net/c/?lat=$
	{position.coords.latitude}&long=${position.coords.longitude}`

	link.innerText = 'Click here to see your position';
	document.querySelector('body').appendChild(link);
    }
    const errorCallBack = (error) => {
	console.log('error', error);
    }
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}
