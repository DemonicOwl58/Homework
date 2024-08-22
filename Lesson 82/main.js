// Задача №1 //
function greet(name) {
    return name
}

const result_1 = greet('Tatiana')
console.log(`Hello ${result_1}`)



let line_1 = '/////////////////////////'
console.log(line_1)



// Задача №2 //
const array = [3, 5, 2, 15, 7, 9, 10, 16, 23, 11, 17]


function comclusionNumbersMoreTen(array) {
    for (let number of array) {
        if (number >= 10) {
            console.log(number)
        }
    }
}
comclusionNumbersMoreTen(array)



let line_2 = '/////////////////////////'
console.log(line_2)



function calculate(number1, number2, operator) {
    switch (operator) {
        case 'plus':
            return number1 + number2
        case 'minus':
            return number1 - number2
        case 'division':
            if (number2 !== 0) {
                return number1 / number2
            } else {
                return 'Деление на 0 невозможно'
            }
        case 'multiplication':
            return number1 * number2
        default:
            return 'Произошла ошибка, попробуйте еще раз'
    }
}

const result_3 = calculate(10.6, 5.3, 'division')
console.log(result_3)