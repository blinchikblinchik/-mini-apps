const openbtn = document.querySelector('.popup-button')
const popup = document.querySelector('.popup')
const popupcontent = document.querySelector('.popupcontent')
const popupclose = document.querySelector('.popupclose')
console.log(openbtn, popup, popupclose, popupcontent)
openbtn.addEventListener('click', function(){
popup.classList.add('opened')
})
popupclose.addEventListener('click', function(){
    popup.classList.remove('opened')
})