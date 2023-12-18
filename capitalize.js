
/* eslint-disable @typescript-eslint/explicit-function-return-type */
function capitalize (string) {
  const result = string[0].toUpperCase() + string.slice(1)
  return result
}

module.exports = capitalize
