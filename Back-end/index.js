import { ApolloServer } from '@apollo/server';

import { expressMiddleware } from '@apollo/server/express4';

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

import express from 'express';

import http from 'http';

import cors from 'cors';

import bodyParser from 'body-parser';
import {resolvers} from './Resolvers.js'
import { typeDefs } from './typedef.js';


// Required logic for integrating with Express

const app = express();

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

app.get('/', function(req,res) {
  res.sendFile(
    path.join(__dirname, "../Front-end/build/index.html"),
   function(err){
    if (err) {
      res.status(500).send(err)
    }}
  )
})


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
const PORT = process.env.PORT || 4000
await new Promise((resolve) => httpServer.listen(PORT , resolve));


console.log(`🚀 Server ready at http://localhost:4000/`);