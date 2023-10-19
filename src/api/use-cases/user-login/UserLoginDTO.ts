export interface UserLoginDTOResquest {
  email: string
  password: string
}

export interface UserLoginDTOResponse {
  token: string
}
