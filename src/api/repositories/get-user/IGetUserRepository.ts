import User from "@/api/models/User"

export interface IPgGetUserRepository {
  getAllUsers: () => Promise<User[]>
}