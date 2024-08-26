const element = document.querySelector('.sven')

element.textContent = 'Text TextTextTextText'
element.id = 'BIBABOBA'
element.style.color = 'violet'
element.style.fontSize = '46px'
element.title = 'Поиск элементов на странице и базовые манипуляции'
console.log(element)

const newElements = document.querySelectorAll('div:not(.sven)')
newElements.forEach ((newElement) => {
newElement.style.color = 'red'
})
console.log(`Измененные элементы, кроме 1`, newElements)

const fourDiv = document.querySelectorAll('div')
if (fourDiv[3]) {
fourDiv[3].style.color = 'blue'
fourDiv[3].style.fontSize = '30px'
}
