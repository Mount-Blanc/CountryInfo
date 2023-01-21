import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from'@apollo/server/standalone';

import  {typeDefs}  from './TypeDef.js';
import {resolvers}  from './Resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);