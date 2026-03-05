import { Field, InputType } from '@foadonis/graphql'

@InputType()
export class EnrollmentInput {
  @Field(() => Number)
  declare userId: number
  @Field(() => Number)
  declare courseId: number
  @Field(() => Number)
  declare classId: number
}
