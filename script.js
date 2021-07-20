
const body = document.body;
const colorValue = document.querySelector('.color-value')
const button = document.querySelector('.btn');

// RANDOM COLOR
const generateRandomColor = ()=> {
	const r = Math.floor(Math.random()*256);
	const g = Math.floor(Math.random()*256);
	const b = Math.floor(Math.random()*256);

	const rgb = `rgb(${r},${g},${b})`;
	return rgb;
}


// BUTTON
button.style.color = `var(--color-light)`

// BUTTON EVENTS
button.addEventListener('click',()=>{
	const newColor = generateRandomColor();

	body.style.background = newColor;
	body.style.transition = `.5s ease-in-out`

	colorValue.textContent = newColor;
	colorValue.style.color = newColor;
});

button.addEventListener('mousedown',()=> {
	button.style.transform = 'scale(.99)';
	button.style.boxShadow = `inset 6px 6px 10px #292929, inset -6px -6px 10px #373737`
	button.style.color = `#c8c8c8`
})

button.addEventListener('mouseup',()=> {
	button.style.transform = 'scale(1)';
	button.style.boxShadow = null
	button.style.color = `var(--color-light)`
})
