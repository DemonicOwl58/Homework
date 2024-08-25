// ..............................push...and......forEash.............................//
const users_1 = [
    {
        name: 'Anna',
        age: 34,
        role: 'admin'
    },
    {
        name: 'Edward',
        age: 24,
        role: 'user'
    },
    {
        name: 'Daniil',
        age: 12,
        role: 'admin'
    },
    {
        name: 'Sergei',
        age: 41,
        role: 'user'
    },
    {
        name: 'John',
        age: 19,
        role: 'user'
    },
    {
        name: 'Teffy',
        age: 11,
        role: 'user'
    }
]

users_1.push({name: 'Nikita',
    age: 21,
    role: 'user'})



const usersName = []

users_1.forEach((user) => {
    usersName.push(`${user.name}, ${user.age}`)
})

console.log(usersName)






// .........................shift....and....unshift....................................................................................//
const users_2 = [
    {
        name: 'Anna',
        age: 34,
        role: 'admin'
    },
    {
        name: 'Edward',
        age: 24,
        role: 'user'
    },
    {
        name: 'Daniil',
        age: 12,
        role: 'user'
    },
    {
        name: 'Sergei',
        age: 41,
        role: 'user'
    },
    {
        name: 'John',
        age: 19,
        role: 'user'
    },
    {
        name: 'Teffy',
        age: 11,
        role: 'user'
    }
]

const deletingAnElement = users_2.shift()
console.log(`Deleting an Users:`, deletingAnElement, `REASON: DISMISSAL`)

users_2.unshift ({
    name: 'Steven Seagal',
        age: 72,
        role: 'admin'
})

console.log(users_2)






// ...................reverse......................................................................................................................................//
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const reversed = [...numbers].reverse()

console.log(`Before:`, numbers)
console.log(`After`, reversed)




// ...................slice..................................................................................................................................................//
const arraySlice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arraySlice.slice(5))




// .........................some................................................................................//
const arraySome = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const even = (element) => element % 2 === 0
console.log(even(5))
console.log(even(6))




// ...............................filters......................................................................................//
const arrayFilters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const result = (element) => element % 2 === 0
const newNumbers = arrayFilters.filter(result)
console.log(newNumbers)