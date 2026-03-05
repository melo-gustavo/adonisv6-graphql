import Course from '#models/course'
import CourseService from '#services/course_service'
import { CourseInput, CourseUpdateInput } from '#types/course'
import { Arg, Int, Mutation, Query, Resolver } from '@foadonis/graphql'

const courseService = new CourseService()

@Resolver()
export default class CourseResolver {
  @Query(() => [Course])
  async getAllCourses() {
    return courseService.getAll()
  }

  @Query(() => Course)
  async getCourseById(@Arg('id', () => Int) id: number) {
    return courseService.findById(id)
  }

  @Mutation(() => Course)
  async createCourse(@Arg('payload', () => CourseInput) payload: CourseInput) {
    return courseService.create(payload)
  }

  @Mutation(() => Course)
  async updateCourse(
    @Arg('id', () => Int) id: number,
    @Arg('payload', () => CourseUpdateInput) payload: CourseUpdateInput
  ) {
    return courseService.update(id, payload)
  }

  @Mutation(() => Boolean)
  async deleteCourse(@Arg('id', () => Int) id: number) {
    return courseService.delete(id)
  }
}
