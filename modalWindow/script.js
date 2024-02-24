'use strict';
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);
// For loop iterating over the button classes
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
// openModal Function
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// closeModal function
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// close button events
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// KeyPress Event
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
 
