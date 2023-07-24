"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTemplates_1 = require("./resolvers/getTemplates");
const getTemplateById_1 = require("./resolvers/getTemplateById");
exports.default = ({
    Query: {
        templates(_, args) {
            return (0, getTemplates_1.getTemplates)(args);
        },
        templateById(_, args) {
            return (0, getTemplateById_1.getTemplateById)(args);
        },
    },
});
//# sourceMappingURL=resolverMap.js.map