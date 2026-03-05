import Course from '#models/course'
import { CourseInput, CourseUpdateInput } from '#types/course'

export default class CourseService {
  async getAll() {
    return Course.all()
  }

  async findById(id: number) {
    return Course.findOrFail(id)
  }

  async create(payload: CourseInput) {
    return Course.create(payload)
  }

  async update(id: number, payload: CourseUpdateInput) {
    const course = await Course.findOrFail(id)
    course.merge(payload)
    await course.save()
    return course
  }

  async delete(id: number) {
    const course = await Course.findOrFail(id)
    await course.delete()
    return true
  }
}
