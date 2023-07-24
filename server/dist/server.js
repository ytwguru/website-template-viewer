"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_depth_limit_1 = tslib_1.__importDefault(require("graphql-depth-limit"));
const http_1 = require("http");
const compression_1 = tslib_1.__importDefault(require("compression"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const config_1 = tslib_1.__importDefault(require("config"));
const schema_1 = tslib_1.__importDefault(require("./schema"));
const startApolloServer = async () => {
    const server = new apollo_server_express_1.ApolloServer({
        schema: schema_1.default,
        validationRules: [(0, graphql_depth_limit_1.default)(7)],
    });
    const app = (0, express_1.default)();
    app.use('*', (0, cors_1.default)());
    app.use((0, compression_1.default)());
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
    const httpServer = (0, http_1.createServer)(app);
    const host = config_1.default.get("server.host");
    const port = config_1.default.get("server.port");
    const scheme = config_1.default.get("server.scheme");
    httpServer.listen({ port }, () => console.log(`GraphQL is now running on ${scheme}://${host}:${port}/graphql`));
};
startApolloServer();
//# sourceMappingURL=server.js.map