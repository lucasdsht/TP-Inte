const hamburger = document.querySelector('.burger-menu')
const linkList = document.querySelector('.link-container')

hamburger.addEventListener('click',  () => {
    hamburger.classList.toggle('is-active')
    linkList.classList.toggle('is-open')
})