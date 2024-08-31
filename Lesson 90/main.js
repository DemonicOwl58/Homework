const btns = document.querySelector('.btn')

btns.addEventListener('click', event => {
    event.target.classList.toggle('red')
    
})