import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { Field, ID, ObjectType } from '@foadonis/graphql'

@ObjectType()
export default class Enrollment extends BaseModel {
  @column({ isPrimary: true })
  @Field(() => ID)
  declare id: number

  @column()
  @Field(() => Number)
  declare userId: number

  @column()
  @Field(() => Number)
  declare courseId: number

  @column.dateTime({ autoCreate: true })
  @Field(() => DateTime)
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  @Field(() => DateTime)
  declare updatedAt: DateTime
}
