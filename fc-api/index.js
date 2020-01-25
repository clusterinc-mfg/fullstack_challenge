import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'

import Query from './server/resolvers/Query'

require('dotenv').config()

//establish a connection with mongoose
//see .env file for port and mongoURI

//setup a graphql server.
//use the ./server/schema.graphql file and

//set the server options
//use the env port and default to 3010
//set the end point to be "/"
//set the playground endpoint to equal /gql



//start the server using the options
