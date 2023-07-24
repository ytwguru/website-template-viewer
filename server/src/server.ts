import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import config from 'config';
import schema from './schema';

const startApolloServer = async () => {
  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
  });
  
  const app = express();
  app.use('*', cors());
  app.use(compression());
  
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  const httpServer = createServer(app);
  const host = config.get<string>("server.host");
  const port = config.get<string>("server.port");
  const scheme = config.get<string>("server.scheme")
  httpServer.listen(
    { port },
    (): void => console.log(`GraphQL is now running on ${scheme}://${host}${port? ":"+port : ""}/graphql`));
};

startApolloServer();