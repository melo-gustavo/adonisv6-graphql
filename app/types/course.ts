import { InputType, Field } from '@foadonis/graphql'

@InputType()
export class CourseInput {
  @Field(() => String)
  declare name: string

  @Field(() => String)
  declare description: string
}

@InputType()
export class CourseUpdateInput {
  @Field(() => String, { nullable: true })
  declare name?: string

  @Field(() => String, { nullable: true })
  declare description?: string
}
