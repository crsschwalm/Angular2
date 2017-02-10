"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules
var core_1 = require("@angular/core");
var product_routing_module_1 = require("./product-routing.module");
//Components Pipes & Directives
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_filter_pipe_1 = require("./product-filter.pipe");
var shared_module_1 = require("../shared/shared.module");
//Services
var product_guard_service_1 = require("./product-guard.service");
var product_service_1 = require("./product.service");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        declarations: [
            product_list_component_1.ProductListComponent,
            product_detail_component_1.ProductDetailComponent,
            product_filter_pipe_1.ProductFilterPipe,
        ],
        imports: [
            shared_module_1.SharedModule,
            product_routing_module_1.ProductRoutingModule
        ],
        providers: [
            product_guard_service_1.ProductDetailGuard,
            product_service_1.ProductService
        ]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map