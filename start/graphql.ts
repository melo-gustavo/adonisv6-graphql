import graphql from '@foadonis/graphql/services/main'

graphql.resolvers([
  () => import('#graphql/resolvers/user_resolver'),
  () => import('#graphql/resolvers/enrollment_resolver'),
  () => import('#graphql/resolvers/course_resolver'),
  () => import('#graphql/resolvers/class_resolver'),
])
