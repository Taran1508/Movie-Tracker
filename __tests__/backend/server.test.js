const request = require('supertest');
const { app, server } = require('../../backend/server');

describe('GET', () => {
  // beforeAll(async () => {
  // });

  // afterAll(async () => {
  //   server.close();
  // });
  //Landing page
  it('should return landing page', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('<!DOCTYPE html>');  
  });
  // Login page
  it('should return login page', async () => {
    const res = await request(app).get('/login');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('<!DOCTYPE html>');  
  });
  //Signup page
  it('should return SignUp page', async () => {
    const res = await request(app).get('/SignUp');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('<!DOCTYPE html>');  
  });
  //Movies page
  it('should return Movies page', async () => {
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('<!DOCTYPE html>');  
  });
  //movie page
  it('should return Movie page', async () => {
    const res = await request(app).get('/movie/:id');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/text\/html/);
    expect(res.text).toContain('<!DOCTYPE html>');  
  });
});
