"use strict";

const switcher = document.getElementById('switch__button');
const timeText = document.querySelector('.switch__message');
const saveInfo = localStorage.getItem('buttonStatus') === 'true';

if (saveInfo) {
	switcher.textContent = 'Turn on';
	document.body.style.backgroundColor = '#035096';
} else {
	switcher.textContent = 'Turn off';
	document.body.style.backgroundColor = '#32cd32 ';
}

let lastTime = localStorage.getItem('lastTime');
if (lastTime) {
	const lightOn = saveInfo ? false : true;
	timeText.innerText = `Last ${ lightOn ? 'on' : 'off' }: ${ lastTime }`;
}

switcher.addEventListener('click', () => {
	const lightOn = switcher.textContent === 'Turn off';

	if (lightOn) {
		switcher.textContent = 'Turn on';
		document.body.style.backgroundColor = '#035096';
	} else {
		switcher.textContent = 'Turn off';
		document.body.style.backgroundColor = '#32cd32 ';
	}

	const now = new Date();
	lastTime = now.toLocaleString();
	localStorage.setItem('lastTime', lastTime);
	localStorage.setItem('buttonStatus', lightOn);
	timeText.innerText = `Last ${ lightOn ? 'on' : 'off' }: ${ lastTime }`;
});