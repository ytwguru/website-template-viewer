# Website Template Viewer Application

The template viewer is modeled after the filmstrip folder view in Windows Explorer.  

## Overview

The application is divided into three main services that are designed to operate decoupled from each other. 


### The Client Application

`website-template-client`


### The Graphql API

`website-template-server`

### The local CDN

`website-template-server`  - cdn
## Setup Instructions

### Prerequistes

- pm2
- .env file for website-template-client 
- config directory setup for client and server directories

```
### Code Structure

website-template-viewer
|-- client
|   |
|   |--config
|   |
|   |--src
|   |
|   |--.env
|   |
|---server
|   |
|   |--cdn
|   |
|   |--config
|   |
|   |--src
|   |   |
|   |   |--resolvers
|   |   |
|   |   |--schema
|   |   |
|   |   |--server.ts
```





To run the application locally you will need the following global node packages

- pm2 (Node process)

### Installing pm2

```
npm install -g pm2

```

### Setting up configuration files.



## Running the application in development 

1) Run the graphql server and local cdn
2) Run the client application


### Running the graphql server and cdn application (requires pm2)

```
cd server

npm i

npm run start:dev-cdn
```

## Running the client application

```
cd client

npm i

npm run start

```

_The React application requires a .env file._

```
./client/.env

----

REACT_APP_CDN_URL=http://localhost:4001
REACT_APP_GRAPHQL_URL=http://localhost:4000/graphql

```

** The CDN is intended only for development mode and serves the images

