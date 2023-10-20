class UserNotFoundError extends Error {
  constructor () {
    super('User Not Found.')
  }
}

export default UserNotFoundError
