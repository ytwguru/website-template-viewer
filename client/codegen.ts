import { CodegenConfig } from '@graphql-codegen/cli';
import config from "config";

const host = config.get("server.host");
const port = config.get("server.port");
const scheme = config.get("server.scheme")

const schema = `${scheme}://${host}${port? ":"+port : ""}/graphql`;

const gqlConfig: CodegenConfig = {
  schema,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true
};

export default gqlConfig;