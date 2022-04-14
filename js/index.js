const burger=document.querySelector('#burger');
const listMenu= document.querySelector('.list-menu')

burger.addEventListener('click',()=>{

  listMenu.classList.toggle('display-on')
})