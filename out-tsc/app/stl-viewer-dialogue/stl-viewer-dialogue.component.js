var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import 'rxjs/Rx';
export var StlViewerDialogueComponent = (function () {
    function StlViewerDialogueComponent(dialogRef) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.closed = false;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.closed = true;
            setTimeout(function () { return _this.dialogRef.close(true); }, 500);
        });
        setTimeout(function () { return _this.downloadPath = _this.cad[0].match("/cad/(.*?)/")[1]; }, 500);
    }
    StlViewerDialogueComponent.prototype.close = function () {
        var _this = this;
        this.closed = true;
        setTimeout(function () { return _this.dialogRef.close(true); }, 500);
    };
    StlViewerDialogueComponent = __decorate([
        Component({
            selector: 'app-stl-viewer-dialogue',
            templateUrl: './stl-viewer-dialogue.component.html',
            styleUrls: ['./stl-viewer-dialogue.component.css'],
        }), 
        __metadata('design:paramtypes', [MdDialogRef])
    ], StlViewerDialogueComponent);
    return StlViewerDialogueComponent;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/stl-viewer-dialogue/stl-viewer-dialogue.component.js.map