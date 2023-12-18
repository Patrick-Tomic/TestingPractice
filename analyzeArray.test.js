const analyzeArray = require('./analyzeArray')

test(('test to see object of array'), () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toBe({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  })
})
