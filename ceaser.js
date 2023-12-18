/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
function ceaser (string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const arr = alphabet.split('')
  const stringArr = string.split('')
  let result = ''
  for (let i = 0; i < stringArr.length; i++) {
    let check = false
    for (let x = 0; x < arr.length; x++) {
      if (stringArr[i] === arr[x]) {
        if (arr[x] === 'z') {
          result += arr[0]
          check = true
          break
        }
        result += arr[x + 1]
        check = true
        break
      }
    }
    if (check === false) {
      result = result + stringArr[i]
    }
  }
  return result
}
module.exports = ceaser
