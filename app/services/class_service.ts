import Class from '#models/class'
import { ClassInput, ClassUpdateInput } from '#types/class'

export default class ClassService {
  async getAll() {
    return Class.all()
  }

  async findById(id: number) {
    return Class.query().where('id', id).preload('enrollment').firstOrFail()
  }

  async create(payload: ClassInput) {
    return Class.create(payload)
  }

  async update(id: number, payload: ClassUpdateInput) {
    const classInstance = await Class.findOrFail(id)
    classInstance.merge(payload)
    await classInstance.save()
    return classInstance
  }

  async delete(id: number) {
    const classInstance = await Class.findOrFail(id)
    await classInstance.delete()
    return true
  }
}
