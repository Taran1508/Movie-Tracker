const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../../frontend/src/signup.html'), 'utf8');
const dom = new JSDOM(html);

global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

global.fetch = jest.fn(()=>
    Promise.resolve({
        ok: true,
        json: ()=> Promise.resolve({ message : 'Signup successful' }),
    })
);

global.alert = jest.fn();

const signup = async (event)=>{
    event.preventDefault();
    const response = await fetch('/Signup',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'test', password: 'test' })
    });

    if(response.ok){
        const result = await response.json();
        alert(result.message);
}
}

describe('SignUp page',()=>{
    const signUpButton = document.querySelector('.signup');

        if(signUpButton){
            signUpButton.addEventListener('click',signup);
        }

    test('Signup button invokes signup(event) and make a fetch request',async ()=>{
        expect(signUpButton).not.toBeNull();
        signUpButton.click();

        await new Promise((resolve) => setImmediate(resolve));

        expect(fetch).toHaveBeenCalledWith('/Signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: 'test', password: 'test' })
        });

        expect(alert).toHaveBeenCalledWith('Signup successful');
    });


    test('Login button navigates to /login',()=>{
        const loginButton = document.querySelector('.snp');
        expect(loginButton).not.toBeNull();
        expect(loginButton.href).toBe('/login');
    })
})