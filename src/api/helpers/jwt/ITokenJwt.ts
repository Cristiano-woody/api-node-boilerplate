export interface ITokenJwt {
  generate: (data: any) => string
  decoded: (token: any) => any
}
