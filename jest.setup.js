const { JSDOM } = require('jsdom');

// Create a virtual DOM using jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator; // Optional, if you use navigator
