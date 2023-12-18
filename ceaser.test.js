const ceaser = require('./ceaser')

test(('encrypted version of string'), () =>{
  expect(ceaser('zed lux jhin flank state')).toBe('afe mvy kijo gmbol tubuf')
})
