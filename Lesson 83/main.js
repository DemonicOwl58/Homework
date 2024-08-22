// Задание №1 и №2//
const prog = {
    student: {
        firstName: 'Edward',
        lastName: 'Trachuk',
        age: 24,
        student: true
    },
    curators: {
        firstName:'Aroken',
        sayHello (name) {
            console.log(`Hello ${name}`)
        }
    }
}
console.log(prog)
prog.curators.sayHello('Curators')




const line_1 = '/////////////////////////////////////////'
console.log(line_1)



const users = [
{
    name:'Anna',
    role:'admin'
},
{
    name:'Edward',
    role:'user'
},
{
    name:'Daniil',
    role:'admin'
},
{
    name:'Sergei',
    role:'user'
},
{
    name:'John',
    role:'user'
},
{
    name:'Teffy',
    role:'user'
}
]

let simpleUsersCount = 0

for (user of users) {
    if (user.role !== 'admin'){
        simpleUsersCount += 1
    }
}

console.log(`Numbers of simple users = ${simpleUsersCount}`)