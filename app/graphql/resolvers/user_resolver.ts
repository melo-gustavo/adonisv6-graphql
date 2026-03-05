import User from '#models/user'
import UserService from '#services/user_service'
import { UserInput, UserUpdateInput } from '#types/user'
import { Arg, Int, Mutation, Query, Resolver } from '@foadonis/graphql'

const userService = new UserService()

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async getAllUsers() {
    return userService.getAll()
  }

  @Query(() => User)
  async getUserById(@Arg('id', () => Int) id: number) {
    return userService.findById(id)
  }

  @Mutation(() => User)
  async createUser(@Arg('payload', () => UserInput) payload: UserInput) {
    return userService.create(payload)
  }

  @Mutation(() => User)
  async updateUser(
    @Arg('id', () => Int) id: number,
    @Arg('payload', () => UserUpdateInput) payload: UserUpdateInput
  ) {
    return userService.update(id, payload)
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('id', () => Int) id: number) {
    return userService.delete(id)
  }
}
