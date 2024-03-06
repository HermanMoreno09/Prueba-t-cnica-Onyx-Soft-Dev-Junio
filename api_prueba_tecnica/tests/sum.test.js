import sum from '../controller/prueba.js';

const sum = require('./sum');
test('adds 1+ 1 to equal 3', ()=>{
    expect(sum(1,2)).toBe(3);
})