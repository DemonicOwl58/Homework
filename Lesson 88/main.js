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

