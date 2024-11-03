"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prime_module_1 = require("./prime/prime.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prime_service_1 = require("./prime/prime.service");
const prime_controller_1 = require("./prime/prime.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prime_module_1.PrimeModule],
        controllers: [app_controller_1.AppController, prime_controller_1.PrimeController],
        providers: [app_service_1.AppService, prime_service_1.PrimeService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map