import User from '#models/user'
import { UserInput, UserUpdateInput } from '#types/user'
import hash from '@adonisjs/core/services/hash'

export default class UserService {
  async getAll() {
    return User.all()
  }

  async findById(id: number) {
    return User.findOrFail(id)
  }

  async create(payload: UserInput) {
    const hashedPassword = await hash.make(payload.password)
    return User.create({ ...payload, password: hashedPassword })
  }

  async update(id: number, payload: UserUpdateInput) {
    const user = await User.findOrFail(id)

    if (payload.password) {
      payload.password = await hash.make(payload.password)
    }

    user.merge({ ...payload })
    await user.save()
    return user
  }

  async delete(id: number) {
    const user = await User.findOrFail(id)
    await user.delete()
    return true
  }
}
