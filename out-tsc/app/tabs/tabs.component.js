var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { MdTabGroup } from '@angular/material';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
export var TabsComponent = (function () {
    function TabsComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.tabIndex = 0;
    }
    TabsComponent.getTabIndex = function (route) {
        while (route.firstChild) {
            route = route.firstChild;
        }
        var params = route.snapshot.params;
        if ('slug' in params) {
            var slug_1 = params['slug'];
            return Math.max(0, TabsComponent.tabInfos.findIndex(function (tabInfo) { return tabInfo.slug === slug_1; }));
        }
        return 0;
    };
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof NavigationEnd; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .subscribe(function (route) {
            var newTabIndex = TabsComponent.getTabIndex(route);
            if (_this.tabIndex !== newTabIndex) {
                _this.tabIndex = newTabIndex;
                // https://github.com/angular/material2/issues/687
                _this.tabGroup.selectedIndex = newTabIndex;
            }
        });
    };
    TabsComponent.prototype.onSelectedIndexChange = function (newTabIndex) {
        if (this.tabIndex !== newTabIndex) {
            this.tabIndex = newTabIndex;
            var tabInfo = TabsComponent.tabInfos[newTabIndex];
            this.router.navigate(['.', tabInfo.slug]);
        }
    };
    TabsComponent.tabInfos = [
        {
            slug: 'home',
        },
        {
            slug: 'about',
        },
        {
            slug: 'code',
        },
        {
            slug: 'circuits',
        },
        {
            slug: 'films',
        },
        {
            slug: 'music',
        },
    ];
    __decorate([
        ViewChild('tabGroup'), 
        __metadata('design:type', MdTabGroup)
    ], TabsComponent.prototype, "tabGroup", void 0);
    TabsComponent = __decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css']
        }), 
        __metadata('design:paramtypes', [Router, ActivatedRoute])
    ], TabsComponent);
    return TabsComponent;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/tabs/tabs.component.js.map