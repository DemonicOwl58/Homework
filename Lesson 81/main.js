// Задача №1 //
const numbers = [3, 5, 7, 1, 11, 14, 16, 18, 100, 123, 182, 135, 200]

for ( let i = 0; i < numbers.length; i++ ) {
    if ((numbers[i] % 2) === 0) {
        console.log( numbers[i])
    }
}


let line = '/////////////////////////////'
console.log(line)



// Задача №2 //
const rainbow = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


for ( i = rainbow.length - 1; i >= 0; i--) {
    console.log( rainbow[i])
}