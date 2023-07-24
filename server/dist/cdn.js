"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const config_1 = tslib_1.__importDefault(require("config"));
const path_1 = tslib_1.__importDefault(require("path"));
const startCDN = async () => {
    const app = (0, express_1.default)();
    app.use('/images', express_1.default.static(path_1.default.join(__dirname, './../cdn/images')));
    const host = config_1.default.get("cdn.host");
    const port = config_1.default.get("cdn.port");
    const scheme = config_1.default.get("cdn.scheme");
    app.listen({ port }, () => console.log(`CDN is now running on ${scheme}://${host}:${port}`));
};
startCDN();
//# sourceMappingURL=cdn.js.map