import User from '#models/user'
import { UserInput } from '#types/user'

export default class UserService {
  async getAll() {
    return User.all()
  }

  async findById(id: number) {
    return User.findOrFail(id)
  }

  async create(payload: UserInput) {
    return User.create(payload)
  }

  async update(id: number, payload: UserInput) {
    const user = await User.findOrFail(id)
    user.merge(payload)
    await user.save()
    return user
  }

  async delete(id: number) {
    const user = await User.findOrFail(id)
    await user.delete()
    return true
  }
}
