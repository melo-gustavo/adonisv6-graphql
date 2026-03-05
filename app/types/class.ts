import { InputType, Field } from '@foadonis/graphql'

@InputType()
export class ClassInput {
  @Field(() => String)
  declare name: string

  @Field(() => Number)
  declare teacherId: number

  @Field(() => Number)
  declare courseId: number
}

@InputType()
export class ClassUpdateInput {
  @Field(() => String, { nullable: true })
  declare name?: string

  @Field(() => Number, { nullable: true })
  declare teacherId?: number

  @Field(() => Number, { nullable: true })
  declare courseId?: number
}
