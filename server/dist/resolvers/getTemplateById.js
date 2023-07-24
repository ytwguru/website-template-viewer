"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTemplateById = void 0;
const tslib_1 = require("tslib");
const templates_json_1 = tslib_1.__importDefault(require("./../data/templates.json"));
const extendedTemplate_json_1 = tslib_1.__importDefault(require("./../data/extendedTemplate.json"));
const getTemplateById = (args) => {
    const { id } = args;
    return templates_json_1.default.find((template) => template.id === id) || extendedTemplate_json_1.default.find((template) => template.id === id);
};
exports.getTemplateById = getTemplateById;
//# sourceMappingURL=getTemplateById.js.map