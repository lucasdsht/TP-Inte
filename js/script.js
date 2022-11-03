const hamburger = document.querySelector('.burger-menu')
const linkList = document.querySelector('.link-container')
const contactForm = document.querySelector('form')
const mailInput = document.getElementById('emailInput')
const submitButton = document.getElementById("submitButton")
const errorMessage = document.getElementById('errorMessage')

const handleForm = (event) =>  {
    event.preventDefault();
}

contactForm.addEventListener('submit', handleForm);

hamburger.addEventListener('click',  () => {
    hamburger.classList.toggle('is-active')
    linkList.classList.toggle('is-open')
})

submitButton.addEventListener('click', () => {
    if(mailInput.value.length === 0) {
        mailInput.style.border = '2px solid red'
    }

    if(mailInput.value.length !== 0) {
        mailInput.style.border = 'none'
    }
})