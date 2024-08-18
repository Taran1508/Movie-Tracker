const request = require('supertest');
const { app, server } = require('../../backend/server');

describe('POST',()=>{

    it('should recieve user details and respond with success',async ()=>{
        const res = await request(app)
        .post('/SignUp')
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: 'Sign up Successful!' });


    })
});