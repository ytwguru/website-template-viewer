# Website Template Server Application

To run the application locally you will need the following global node packages

- pm2 (Node process)

### Installing pm2

```
npm install -g pm2

```

### Setting up configuration files.

Update the config directory with default configuration

```
module.exports = {
  "server" : {
    "host" : "localhost",
    "port" : 4000,
    "scheme" : "http"
  },
  "cdn" : {
    "host" : "localhost",
    "port" : 4001,
    "scheme" : "http"
  }
}
```

### Running the graphql server and cdn application (requires pm2)

```
cd server

npm i

npm run start:dev-cdn
```


### Running the graphql without the cdn

```
cd server

npm i

npm run start:dev
```

### Running Tests

```
npm run test
```

### Generating types using graphql schema

```
npm run codegen
```