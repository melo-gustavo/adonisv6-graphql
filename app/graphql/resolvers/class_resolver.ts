import Class from '#models/class'
import ClassService from '#services/class_service'
import { ClassInput } from '#types/class'
import { Arg, Int, Mutation, Query, Resolver } from '@foadonis/graphql'

const classService = new ClassService()

@Resolver()
export default class ClassResolver {
  @Query(() => [Class])
  async getAllClasses() {
    return classService.getAll()
  }

  @Query(() => Class)
  async getClassById(@Arg('id', () => Int) id: number) {
    return classService.findById(id)
  }

  @Mutation(() => Class)
  async createClass(@Arg('payload', () => ClassInput) payload: ClassInput) {
    return classService.create(payload)
  }

  @Mutation(() => Class)
  async updateClass(
    @Arg('id', () => Int) id: number,
    @Arg('payload', () => ClassInput) payload: ClassInput
  ) {
    return classService.update(id, payload)
  }

  @Mutation(() => Boolean)
  async deleteClass(@Arg('id', () => Int) id: number) {
    return classService.delete(id)
  }
}
