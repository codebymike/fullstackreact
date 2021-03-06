# Fullstack Javascript 'AirBnB' Clone (TinyHouse)

w/ React, Typescript, Node.js & GraphQL

## Architechure

Server/ - Node.js, Express, Apollo-Server, GraphQL API  
Client/ - React.js, Apollo-Client 

## Getting started

Install all dependencies with yarn or npm. This is the same for both client and server project.
```cli
npm install
```

### Server

An [Apollo Server](https://www.apollographql.com/docs/apollo-server) with [MongoDB](https://www.mongodb.com) backend 
for storing rental houses. 

#### Configure your environment variables

Create a environment variable, `/server/.env`:

```env
PORT=9000
DB_USER=<username>
DB_USER_PASSWORD=<password>
DB_CLUSTER=<mongodb cluster>
G_CLIENT_ID=<Google OAuth client id>
G_CLIENT_SECRET=<Google OAuth API secret>
PUBLIC_URL=<http://localhost:3000>
SECRET=<some secret text>
NODE_ENV=<development for local dev>
```

Seed with some mock data

```cli
npm run seed
```

#### Run & build

Start the server with yarn.
```cli
npm run start
```

In development mode you can access the GraphQL Playground on URL [http://localhost:9000/api/](http://localhost:9000/api/)


Create a production build with yarn.
```cli
npm run build
```

### Client

A React [Apollo Client](https://www.apollographql.com/docs/react) that display rental listings.

All client code is located in the  `/client` folder.

Start the client with yarn.
```cli
npm run start
```

The client uses [Apollo CLI](https://www.apollographql.com/docs/devtools/cli/) to generate types from the server API.

Read the server API schema and stores it locally to the client.
```cli
npm run codegen:schema
```

Reads the local schema file and generate types where GraphQL queries are defined.
```cli
npm run codegen:generate
```