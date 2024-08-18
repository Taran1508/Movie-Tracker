const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../../frontend/public/index.html'), 'utf8');
const dom = new JSDOM(html);
const { document } = dom.window;

describe('Login Page', () => {
    test("Login button navigates to /login",()=>{
        const loginButton = document.querySelector(".login-button");
        expect(loginButton).not.toBeNull();
        expect(loginButton.href).toBe('/login');
    });
});