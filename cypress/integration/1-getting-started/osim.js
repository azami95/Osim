const names = ['osim', 'mekhron', 'aziz'] 
const newNames = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(newNames)
const newFilter = names.filter((name) => {
    console.log(name)
})
console.log(newFilter)
console.log(names[2])

names[0] === 'osim' && console.log('yes, it is osim')

const getSum = (a) => {
    return function(b){
        return {
            c: a, 
            d: b
        }
    }
}
const getSum2 = a =>  b =>  ({a, b})

const sum3= getSum('osim')
const name = sum3('khusainov')

// const sum4 = getSum(2)(sum3)
const newName = getSum2('osim')('khusainov')
console.log(name, newName)