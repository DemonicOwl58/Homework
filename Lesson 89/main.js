const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

btn.addEventListener('click', () => {
    text.classList.toggle('move')

    if (text.classList.contains('move')) {
        text.textContent = 'I am moving now!'
        text.style.color = 'red'
        text.style.fontSize = '50px'
        text.style.backgroundColor = '#7fffd4'
        text.style.borderRadius = '30px'
        text.style.padding = '15px'
        btn.textContent = 'Ой...'
    } else {
        text.textContent = 'I am back'
        text.style.fontSize = '18px'
        text.style.color = 'yellow'
        text.style.backgroundColor = '#cea87a'
        text.style.borderRadius = '5px'
        btn.textContent = 'button'
        text.style.padding = '5px'
    }
})