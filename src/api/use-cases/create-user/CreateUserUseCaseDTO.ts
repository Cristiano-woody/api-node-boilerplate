export class CreateUserUseCaseDTO {
  public name: string
  public email: string
  public password: string

  constructor ({ name, email, password }: CreateUserUseCaseDTO) {
    this.name = name
    this.email = email
    this.password = password
  }
}
