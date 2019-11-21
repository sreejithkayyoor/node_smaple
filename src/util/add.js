const axios = require('axios')


let result = (result)=>{
    console.log('in Result: '+result)
    return axios.get('https://jsonplaceholder.typicode.com/todos/2')
        


    // console.log('Result: '+result)
}

let post = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/todos/3')    
}
module.exports = {result,post}