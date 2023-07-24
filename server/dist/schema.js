"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("graphql-import-node");
const graphql_tools_1 = require("graphql-tools");
const load_files_1 = require("@graphql-tools/load-files");
const path_1 = tslib_1.__importDefault(require("path"));
const resolverMap_1 = tslib_1.__importDefault(require("./resolverMap"));
const typeDefs = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "./schema/**/*.graphql"));
const schema = (0, graphql_tools_1.makeExecutableSchema)({
    typeDefs,
    resolvers: resolverMap_1.default,
});
exports.default = schema;
//# sourceMappingURL=schema.js.map