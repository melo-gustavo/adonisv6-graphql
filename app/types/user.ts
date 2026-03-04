import { Field, InputType } from '@foadonis/graphql'

@InputType()
export class UserInput {
  @Field(() => String)
  declare name: string

  @Field(() => String)
  declare email: string

  @Field(() => String)
  declare password: string

  @Field(() => String, { nullable: true })
  declare avatar?: string | null
}
