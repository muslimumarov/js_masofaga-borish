const PIYODA__TEZLIK = 3.16;
const VELOSIPED__TEZLIK = 20.1;
const MASHINA__TEZLIK = 70;
const SAMALYOT__TEZLIK = 800;
let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elTextone = document.querySelector('.textone');
let elTexttwo = document.querySelector('.texttwo');
let elTextthre = document.querySelector('.textthre');
let elTextfour = document.querySelector('.textfour');
function timeChek(masofa, tezlik) {
let hour = Math.floor(masofa / tezlik);
let minutes = Math.floor((masofa / tezlik - hour) * 60);
let seconds = Math.floor(((masofa / tezlik -   hour) * 60 - minutes) * 60);
return  `Soat${hour}:Minut${minutes}:Sekund${seconds}`;
}
elForm.addEventListener('keyup', function(evt){
  evt.preventDefault();
  let nameInput = elInput.value;
  elTextone.textContent = timeChek(nameInput, PIYODA__TEZLIK);
  elTexttwo.textContent = timeChek(nameInput, VELOSIPED__TEZLIK);
  elTextthre.textContent = timeChek(nameInput, MASHINA__TEZLIK);
  elTextfour.textContent = timeChek(nameInput, SAMALYOT__TEZLIK);
});