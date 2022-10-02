import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'app/ui/graphql/schema.graphql',
  documents: 'app/ui/graphql/queries/*.ts',
  generates: {
    'app/ui/graphql/types': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
