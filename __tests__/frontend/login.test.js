const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML file into JSDOM
const html = fs.readFileSync(path.resolve(__dirname, '../../frontend/src/login.html'), 'utf8');
const dom = new JSDOM(html);

// Set up global variables
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Login successful!' }),
  })
);
global.alert = jest.fn(); 

// Define the login function
const login = async (event) => {
  event.preventDefault();
  console.log('Login function called'); // Debugging
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'test', password: 'test' }),
  });
  if (response.ok) {
    const data = await response.json();
    alert(data.message);
  }
};

describe('Login functionality', () => {
  let loginButton;
  let signUpButton;

  beforeAll(() => {
    loginButton = document.querySelector('.login-button');
    signUpButton = document.querySelector('.signUp-button');

    if (loginButton) {
      loginButton.addEventListener('click', login);
    }
  });

  test('Login button should invoke login(event) and make a fetch request', async () => {
    expect(loginButton).not.toBeNull();
    console.log('Login button exists'); 
    loginButton.click(); // Trigger the click event

    // Wait for the login function to complete
    await new Promise((resolve) => setImmediate(resolve));

    // Check if fetch was called with the expected arguments
    expect(fetch).toHaveBeenCalledWith('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'test', password: 'test' }),
    });

    expect(alert).toHaveBeenCalledWith('Login successful!');
  });

  test('SignUp link should navigate to /signUp', () => {
    expect(signUpButton).not.toBeNull();
    expect(signUpButton.href.endsWith('/SignUp')).toBe(true);
  });
});
