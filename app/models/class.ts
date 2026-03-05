import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, belongsTo } from '@adonisjs/lucid/orm'
import { Field, ObjectType, ID } from '@foadonis/graphql'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Enrollment from '#models/enrollment'
import Course from '#models/course'

@ObjectType()
export default class Class extends BaseModel {
  @column({ isPrimary: true })
  @Field(() => ID)
  declare id: number

  @column()
  @Field(() => Number)
  declare teacherId: number

  @column()
  @Field(() => Number)
  declare courseId: number

  @column()
  @Field(() => String)
  declare name: string

  @hasMany(() => Enrollment)
  @Field(() => [Enrollment], { nullable: true })
  declare enrollment: HasMany<typeof Enrollment>

  @belongsTo(() => Course)
  @Field(() => Course, { nullable: true })
  declare course: BelongsTo<typeof Course>

  @column.dateTime({ autoCreate: true })
  @Field(() => DateTime)
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  @Field(() => DateTime)
  declare updatedAt: DateTime
}
