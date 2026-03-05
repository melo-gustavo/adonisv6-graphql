import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { Field, ID, ObjectType } from '@foadonis/graphql'

@ObjectType()
export default class Course extends BaseModel {
  @column({ isPrimary: true })
  @Field(() => ID)
  declare id: number

  @column()
  @Field(() => String)
  declare name: string

  @column()
  @Field(() => String)
  declare description: string

  @column.dateTime({ autoCreate: true })
  @Field(() => DateTime)
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  @Field(() => DateTime)
  declare updatedAt: DateTime
}
