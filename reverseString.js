/* eslint-disable @typescript-eslint/explicit-function-return-type */
function reverseString (string) {
  const arr = string.split('')
  let result = ''
  while (arr.length > 0) {
    result = result + arr.pop()
  }
  return result
}
module.exports = reverseString
