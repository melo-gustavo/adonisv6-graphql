import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { Field, ID, ObjectType } from '@foadonis/graphql'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Course from '#models/course'
import Class from '#models/class'

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

  @column()
  @Field(() => Number)
  declare classId: number

  @belongsTo(() => User)
  @Field(() => User, { nullable: true })
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Course)
  @Field(() => Course, { nullable: true })
  declare course: BelongsTo<typeof Course>

  @belongsTo(() => Class)
  @Field(() => Class, { nullable: true })
  declare class: BelongsTo<typeof Class>

  @column.dateTime({ autoCreate: true })
  @Field(() => DateTime)
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  @Field(() => DateTime)
  declare updatedAt: DateTime
}
