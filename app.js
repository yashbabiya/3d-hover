const card = document.querySelector('.card')
const container = document.querySelector('.container')
const h = document.querySelector('h1')
container.addEventListener('mousemove',(e)=>{
    let x = (window.innerWidth / 2 -e.pageX)/7;
    let y = (window.innerHeight / 2 -e.pageY)/7;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
})

container.addEventListener('mouseover',(e)=>{
    card.style.transition= 'none'
    h.style.transform = 'translateZ(150px)'
})
container.addEventListener('mouseleave',(e)=>{
    card.style.transition= '.5s ease'

  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  h.style.transform = 'translateZ(0px)'
})