module.exports = {
  API: {
    graphql: () => ({
      data: {
        listZellerCustomers: {
          items: [
            {
              email: 'lynn@gmail.com',
              id: 'f47813cf-0482-4326-afc9-12f53218ed06',
              name: 'Lynn Warr',
              role: 'MANAGER'
            },
            {
              email: 'david@gmail.com',
              id: '73bae2af-4fa4-4023-8829-1034604e7590',
              name: 'David Miller',
              role: 'ADMIN'
            },
            {
              email: 'ryan@gmail.com',
              id: '0c90ecd4-d159-4335-9377-f29ee6829847',
              name: 'Ryan Muller',
              role: 'ADMIN'
            },
            {
              email: 'joe@gmail.com',
              id: 'edc033b9-ba6c-4857-9ff9-85c52ad39ef9',
              name: 'Joe Perera',
              role: 'MANAGER'
            },
            {
              email: 'cris@gmail.com',
              id: '24d34832-7c10-4c91-a582-32a0222125c0',
              name: 'Chris Miller',
              role: 'ADMIN'
            }
          ]
        }
      }
    })
  },
  graphqlOperation: jest.fn()
};
