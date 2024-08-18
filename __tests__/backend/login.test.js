const request = require('supertest');
const { app, server } = require('../../backend/server');

describe('POST',()=>{
    // beforeAll(async () => {
    //   })

    // afterAll(async () => {
    //     server.close();
    //   });

    it('Should recieve user details and respond with success', async ()=>{
        const res = await request(app)
        .post('/login')
        .send({ email: 'test@example.com', password: '123456' })
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: 'Login successful' });

    },10000);
})