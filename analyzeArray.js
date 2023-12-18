/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
function analyzeArray (array) {
  const object = {
    average: array.reduce((total, num) => total + num, 0) / array.length,
    min: array.reduce((min, num) => {
      return Math.min(min, num)
    }),
    max: array.reduce((max, num) => {
      return Math.max(max, num)
    }),
    length: array.length
  }
  return object
}
module.exports = analyzeArray
