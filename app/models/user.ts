import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { ObjectType, Field, ID } from '@foadonis/graphql'

@ObjectType()
export default class User extends BaseModel {
  @column({ isPrimary: true })
  @Field(() => ID)
  declare id: number

  @column()
  @Field(() => String, { nullable: true })
  declare name: string

  @column()
  @Field(() => ID)
  declare email: string

  @column()
  @Field(() => String, { nullable: true })
  declare password: string

  @column()
  @Field(() => String, { nullable: true })
  declare avatar: string | null

  @column.dateTime({ autoCreate: true })
  @Field(() => DateTime)
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  @Field(() => DateTime)
  declare updatedAt: DateTime
}
