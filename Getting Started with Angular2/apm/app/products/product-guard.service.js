"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductDetailGuard = (function () {
    //CanActivate requires this function
    /**
     * [canActivate description]
     * @param  {ActivatedRouteSnapshot} route [description]
     * @return {boolean}                      [description]
     */
    function ProductDetailGuard(_router) {
        this._router = _router;
    }
    ProductDetailGuard.prototype.canActivate = function (route) {
        //the url path is an array of paths. id is index 1 of ['product', id]
        var id = +route.url[1].path;
        //if the id isnt a number or is les than 0
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            // start redirect to product list page
            this._router.navigate(['/products']);
            //abort current navigation
            return false;
        }
        ;
        //else return true
        return true;
    };
    return ProductDetailGuard;
}());
ProductDetailGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], ProductDetailGuard);
exports.ProductDetailGuard = ProductDetailGuard;
//# sourceMappingURL=product-guard.service.js.map