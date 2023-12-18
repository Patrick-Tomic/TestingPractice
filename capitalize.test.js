/* eslint-disable @typescript-eslint/no-var-requires */
const capitalize = require('./capitalize')
test('test if the string "test" is has a capital T', () =>{
  expect(capitalize('test')).toBe('Test')
})

test(('testing capitalize of camel'), () =>{
  expect(capitalize('camel')).toBe('Camel')
})
