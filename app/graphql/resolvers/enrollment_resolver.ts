import Enrollment from '#models/enrollment'
import EnrollmentService from '#services/enrollment_service'
import { EnrollmentInput } from '#types/enrollment'
import { Arg, Int, Mutation, Query, Resolver } from '@foadonis/graphql'

const enrollmentService = new EnrollmentService()

@Resolver()
export default class EnrollmentResolver {
  @Query(() => [Enrollment])
  async getAllEnrollments() {
    return enrollmentService.getAll()
  }

  @Query(() => Enrollment)
  async getEnrollmentById(@Arg('id', () => Int) id: number) {
    return enrollmentService.findById(id)
  }

  @Mutation(() => Enrollment)
  async createEnrollment(@Arg('payload', () => EnrollmentInput) payload: EnrollmentInput) {
    return enrollmentService.create(payload)
  }

  @Mutation(() => Boolean)
  async deleteEnrollment(@Arg('id', () => Int) id: number) {
    return enrollmentService.delete(id)
  }
}
