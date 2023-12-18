/* eslint-disable @typescript-eslint/no-var-requires */
const reverse = require('./reverseString')

test(('returns a reverse of hello'), () => {
  expect(reverse('hello')).toBe('olleh')
})
