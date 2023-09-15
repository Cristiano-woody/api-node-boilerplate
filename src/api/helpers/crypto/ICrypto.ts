export interface ICrypto {
  hash: (data: string) => Promise<string>
}
