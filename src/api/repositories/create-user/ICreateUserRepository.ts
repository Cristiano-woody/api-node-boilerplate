import User from "@/api/models/User"

export interface ICreateUserRepository {
  CreateUser: (user:User) => Promise<User>
}