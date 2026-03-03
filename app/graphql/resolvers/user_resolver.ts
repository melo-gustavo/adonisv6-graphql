import User from '#models/user'
import UserService from '#services/user_service'
import { Query, Resolver } from '@foadonis/graphql'

const userService = new UserService()

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async getAllUsers() {
    return userService.getAllUsers()
  }

  @Query(() => User)
  async userById(id: number) {
    return userService.findById(id)
  }

  @Query(() => User)
  async createUser(payload: any) {
    return userService.create(payload)
  }

  @Query(() => User)
  async updateUser(id: number, payload: any) {
    return userService.update(id, payload)
  }

  @Query(() => Boolean)
  async deleteUser(id: number) {
    return userService.delete(id)
  }
}
