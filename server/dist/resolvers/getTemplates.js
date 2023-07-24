"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplates = void 0;
const tslib_1 = require("tslib");
const templates_json_1 = tslib_1.__importDefault(require("./../data/templates.json"));
const extendedTemplate_json_1 = tslib_1.__importDefault(require("./../data/extendedTemplate.json"));
const getTemplates = (args) => {
    const { start = 0, limit = 4 } = args;
    return [...templates_json_1.default, ...extendedTemplate_json_1.default].slice(start, start + limit);
};
exports.getTemplates = getTemplates;
//# sourceMappingURL=getTemplates.js.map