class DBError extends Error {
  constructor (message: string) {
    super(`Erro ao executar a consulta SQL: ${message}`)
  }
}

export default DBError
