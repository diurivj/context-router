export default function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: 'You logged in',
        user: {
          email: 'email@email.com',
          name: 'Diego',
          lastName: 'Foo'
        }
      })
    }, 1000)
  })
}
