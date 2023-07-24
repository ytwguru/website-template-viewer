import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';
import resolvers from './resolverMap';
import { GraphQLSchema } from 'graphql';

const typeDefs = loadFilesSync(path.join(__dirname, "./schema/**/*.graphql"));
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default schema;