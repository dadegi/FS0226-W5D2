const overlay = document.querySelector('.overlay');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelectorAll('.closeModal');

openModal.addEventListener('click', (e) => {
	e.preventDefault();
	overlay.style.display = 'block';
});

closeModal.forEach(function (btn) {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		overlay.style.display = 'none';
	});
});
