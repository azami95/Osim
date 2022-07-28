/// <referance types="cypress" />
const dolphins = (96 + 108 + 89) / 3

const koalas = (88 + 91 + 110) / 3

console.log(dolphins, koalas)


// if (dolphins > koalas) {
//     console.log('Dolphins won')
// }else if (dolphins === koalas) {
//     console.log('Draw')
// }else (dolphins < koalas) {
//     console.log('Koalas won')
// }



let bill = 275
let tip = 41.25

if (bill >= 50 && bill <= 300) {
    bill / 100 * 15
}else {
     bill / 100 * 20
}



function fruits(apples, oranges) {
    const textOfFruits = `Juice with ${apples} apples and ${oranges} oranges`
    return textOfFruits
}

fruits(5, 3)


function callAge(birthYear, firstName) {
    const age = 2022 - birthYear + ' ' +firstName
    
    return age
}

callAge(27, 'Aziz')


///cards.forEach((el) => cardsEl.textContent += el + ' ')

const arrNums = [1, 2, 3, 4]
const newArr = [...arrNums]
const sums = []
for(let i = 0; i < arrNums.length; i++){
    sums.push(arrNums[i])

}
console.log(sums)
arrNums.forEach(el => {
    sums.push(el + 1)
})
console.log(sums)

const obj = {
    name: {
        firstName: 'Aziz',
        lastName: 'Khusainov'
    },
    age: 30
}
const {name} = obj
const {firstName} = obj.name
const {lastName} = name
console.log(obj)
console.log(name)
console.log(firstName)
console.log(lastName)


const arr = ['a', 'b', 'c', 'd', 5 ]



// arr.pop()

// arr.push('f')

// arr.shift()

// // arr.unshift('b')

const newArr2 = arr.filter(osim => osim !== 'c')

const newArr3 = arr.filter(el => el === 'c')
const newArr4 = arr.find(el => el ==='c')
const newArr5 = arr.some(el => el.includes('d'))


const newArr6 = arr.every(el => typeof el === 'string')
const newArr7 = arr.findIndex(el => el === 'd')

console.log(newArr6)

console.log(newArr7)

const nums = [1, 2, 3, [4, 5]]
const newNumbers = nums.flatMap(el => el + 1)
const sumNums = nums.reduce((previusValue, nextValue) => {
    return previusValue + nextValue
})
console.log(nums)
console.log(newNumbers)


cy.get('nb-card-body:visible:rm contains("FoPicker")').click()// 1 
cy.contains('nb-card-body', 'Using the Grid').find('')
cy.get('#inputEmail1').type()
//div 

//console.log(arr)
const dolphinsScore = averageScore(12, 23, 45)

const koalasScore = averageScore(65, 54, 41)


function averageScore(first, second, third) {
    const avarage = (first + second + third) / 3 
    return avarage
}

function checkWinner(avDolph, avKoalas) {
    // const dolphinsScore = averageScore(44, 23, 71)

    // const koalasScore = averageScore(65, 54, 41)
    if (avDolph >= 2* avKoalas) {
        console.log(`Dolphins Win ${avDolph} vs ${avKoalas}`)
    }else if (avKoalas >= 2* avDolph) {
        console.log(`Koalas Won ${avDolph} vs ${avKoalas}`)
    }else {
        console.log('Draw')
    }
}

billsOf = [125, 555, 44 ]

tipsOf = [calculateTip(billsOf[0]), calculateTip(billsOf[1]), calculateTip(billsOf[2])]

function calculateTip(bill) {
    tip = bill / 100 * 15
    return tip
}
calculateTip(billsOf[0])



const john = {
    fullname: 'John Smith',
    height: 195,
    weight: 92
}

const mark = {
    fullname: 'Mark Miller',
    height: 169,
    weight: 78
    
}

 const calcBMI = function() {
    this.bmi = this.weight / (this.height * this.height)
    return this.bmi
}

console.log(`${john.fullname}'s BMI ${john.calcBMI()} is higher than ${mark.fullname}'s BMI ${calcBMI()}!`)



const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 77]

//1
let tips = []
bills.forEach(el => tips.push(calculateTip(el)))

//2
let tips2 = bills.map(el => calculateTip(el))

//3
let tips3 = []
for(let i = 0; i < bills.length; i++){
    tips3.push(calculateTip(bills[i]))
}

function calculateTip(bill) {
    
    return  bill / 100 * 15
}

console.log(tips, tips2, tips3)


const axios = require('axios')

const data = {
    name: 'Osim',
    entries: [1, 2, 3]
}
console.log(data.entries)
const getAnimeCategory = async (name) => {
    try {
        const {data} = await axios(`https://api.publicapis.org/enries?category=${name}`)
        return console.log(data.entries)
    } catch (error) {
        console.log(error.response.data)
    }
}

getAnimeCategory(3)

axios.get('https://api.publicapis.org/entries?category=animal').then(response => {
    console.log(response.data)
}).catch(err => console.log(err))

const sum = 1 + 2
console.log(sum)




const testArray = [1,2,2,4,4,5,3]
const f = testArray.filter(el => el === 4 ).map(el => el + 1).find(el => el ==5)
console.log(f)




const c = testArray.map(el => el + 1)
const d = [...testArray, testArray[0] +1, testArray[1] + 1]
const g = testArray.join(',')
console.log(g)
console.log(d)


const digit = testArray.find(el => el === 4)

//console.log(digit)

const newArrObj = [{id: 1, data: 'aaa'}, {id: 1, data: 'bb'}, {id: 1, data: 'cc'}, {id: 1, data: 'cc'}, 5]
const findObj = newArrObj.filter(el => el.id === 1 && el.data === 'bb')
//console.log(findObj)

const a = testArray.some(el => el === 4)
console.log(a)

expect(a).eq(true)


const b = testArray.every(el => el === 2)
console.log(b)







