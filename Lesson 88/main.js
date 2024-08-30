// =======================click-color===========================//
const button = document.querySelector('.btn')

let btnIsRed = false

button.addEventListener('click', () => {
    if (btnIsRed) {
        button.style.backgroundColor = 'orange'
        btnIsRed = false
    } else {
        button.style.backgroundColor = "green"
        btnIsRed = true
    }
})

function scrolling() {
    console.log('scroll')
}
document.addEventListener('scroll', scrolling)


// ===================click==========================//
button.addEventListener('click', () => {
    console.log('Click сработал')
})


// ===================keydown==========================//
document.addEventListener('keydown', () => {
    console.log('keydown сработал')
})


// ===================submit===========event.preventDefault============getElementById====//
const form = document.querySelector('.form-example')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('submit сработал')

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    console.log(`Введенное имя: ${name}`)
    console.log(`Введенный email: ${email}`)
});
