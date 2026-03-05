import Course from '#models/course'
import CourseService from '#services/course_service'
import { CourseInput } from '#types/course'
import { Arg, Int, Mutation, Query, Resolver } from '@foadonis/graphql'

const courseService = new CourseService()

@Resolver()
export default class CourseResolver {
	@Query(() => [Course])
	async getAllcourses() {
		return courseService.getAll()
	}

	@Query(() => Course)
	async getcourseById(@Arg('id', () => Int) id: number) {
		return courseService.findById(id)
	}

	@Mutation(() => Course)
	async createCourse(@Arg('payload', () => CourseInput) payload: CourseInput) {
		return courseService.create(payload)
	}

	@Mutation(() => Boolean)
	async deleteCourse(@Arg('id', () => Int) id: number) {
		return courseService.delete(id)
	}
}
