import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

const main = async () => {
  const connection = await createConnection();

  const app = express();

  //Handle server-db connection using Apollo Server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false
    })
  });

  // Serve the serve using the express
  app.get('/', (_, res) => {
    res.send('This is a not secure site');
  });
  app.listen(4000, () => {
    console.log('Serving at localhost:4000');
  });
};

main().catch((err) => {
  console.log(err);
});
