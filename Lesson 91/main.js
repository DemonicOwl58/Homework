const btnsWrapper = document.querySelector(".btns")

btnsWrapper.addEventListener('click', event => {
if (event.target && event.target.classList.contains('btn')) {
    console.log(event.target.textContent)
}
})