const app = require('../src/server')
const supertest = require('supertest')
const request = supertest(app)

// it('async', async done =>{
//     const response = await request.get('/healthcheck')

//     expect(response.status).toBe(200)    

//     done()
// })

it('TEsting',async() =>{

    // try{
    const response = await request.get('/students/post')
    // console.log(response.status)
    expect(response.status).toBe(500)
    // }catch(exc){
    //     console.log('Exception: '+exc)
    // }
    
})
