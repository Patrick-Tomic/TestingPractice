/* eslint-disable @typescript-eslint/no-var-requires */
const calculator = require('./calculator')
test(('addition of 2+16'), () => {
  expect(calculator.add(2, 16)).toBe(18)
})

test(('multiplication of 75*-3'), () =>{
  expect(calculator.multiply(75, -3)).toBe(-225)
})

test(('division of 12 / 3'), () =>{
  expect(calculator.divide(12, 3)).toBe(4)
})

test(('subtraction of 7 - 2'), () => {
  expect(calculator.subtract(7, 2)).toBe(5)
})
