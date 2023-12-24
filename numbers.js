let axios = require('axios')


let url = 'http://numbersapi.com/5/trivia?fragment'
let url2 = 'http://numbersapi.com/1..5'


async function numbers() {
let res = await axios.get(url)
console.log(res['data'])
}

numbers()

async function multipleRequests() {
    let res = await axios.get(url2)
    console.log(res['data'])
    }

multipleRequests()


for (let i = 0 ; i <5 ; i++){
numbers()
}