import env from '#start/env'
import { defineConfig } from '@foadonis/graphql'

const isProduction = env.get('NODE_ENV') === 'production'

export default defineConfig({
  path: '/graphql',
  apollo: {
    introspection: !isProduction,
    playground: false,
    csrfPrevention: false,
  },
  emitSchemaFile: true,
})
