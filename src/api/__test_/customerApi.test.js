
const customerApi = require('../customerApi')

// A simple example test
describe('getCustomers() using async fetch', () => {
  it('should load user data', () => {
    return customerApi.getAllCustomers()
    .then(data => {
      expect(data).toBeDefined()
      expect(data.length).toEqual(6)
      expect(data[0].Bets.length).toEqual(4)
    })
  })
})
