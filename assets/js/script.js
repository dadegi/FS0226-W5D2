const overlay = document.querySelector('.overlay');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.closeModal');
const myForm = document.querySelector('form');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userDate = document.getElementById('userDate');
const formResponse = document.querySelector('.formResponse');
const registerName = document.getElementById('registerName');
const registerEmail = document.getElementById('registerEmail');
const registerDate = document.getElementById('registerDate');

openModal.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'block';
});

closeModal.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'none';
});

myForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let nameRegistered = userName.value;
	let emailRegistered = userEmail.value;
	let dateRegistered = userDate.value;

	formResponse.style.display = 'block';
	registerName.textContent = nameRegistered;
	registerEmail.textContent = emailRegistered;
	registerDate.textContent = dateRegistered;
	myForm.reset();
	overlay.style.display = 'none';
});
