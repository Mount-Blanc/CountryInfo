import { ApolloServer } from '@apollo/server';

import { expressMiddleware } from '@apollo/server/express4';

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import express from 'express';

import http from 'http';

import cors from 'cors';

import bodyParser from 'body-parser';
import {resolvers} from './Resolvers.js'
import { typeDefs } from './typedef.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Required logic for integrating with Express

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicPath = path.join(__dirname, '../Front-end/nationinfo', 'build');

app.use(express.static(publicPath));

app.get('*',cors(), (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
// Our httpServer handles incoming requests to our Express app.

// Below, we tell Apollo Server to "drain" this httpServer,

// enabling our servers to shut down gracefully.

const httpServer = http.createServer(app);


// Same ApolloServer initialization as before, plus the drain plugin

// for our httpServer.

const server = new ApolloServer({

  typeDefs,

  resolvers,

  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

});

// Ensure we wait for our server to start

await server.start();


// Set up our Express middleware to handle CORS, body parsing,

// and our expressMiddleware function.




app.use(

  '/graphql',

  cors(),

  bodyParser.json(),

  // expressMiddleware accepts the same arguments:

  // an Apollo Server instance and optional configuration options

  expressMiddleware(server, {

    context: async ({ req }) => ({ token: req.headers.token }),

  }),

);


// Modified server startup
const port = process.env.PORT || 4000
await new Promise((resolve) => httpServer.listen(port , resolve));


console.log(`🚀 Server ready at http://localhost:4000/`);