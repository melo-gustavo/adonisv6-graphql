import Enrollment from '#models/enrollment'
import { EnrollmentInput } from '#types/enrollment'

export default class EnrollmentService {
  async getAll() {
    return Enrollment.all()
  }

  async findById(id: number) {
    return Enrollment.findOrFail(id)
  }

  async create(payload: EnrollmentInput) {
    return Enrollment.create(payload)
  }

  async delete(id: number) {
    const enrollment = await Enrollment.findOrFail(id)
    await enrollment.delete()

    return true
  }
}
