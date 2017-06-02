var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DialogsService } from './stl-viewer-dialogue.service';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { Stl3dViewerComponent } from '../stl3d-viewer/stl3d-viewer.component';
import { StlViewerDialogueComponent } from './stl-viewer-dialogue.component';
export var DialogsModule = (function () {
    function DialogsModule() {
    }
    DialogsModule = __decorate([
        NgModule({
            imports: [
                MaterialModule.forRoot(),
            ],
            exports: [
                StlViewerDialogueComponent,
            ],
            declarations: [
                StlViewerDialogueComponent,
                Stl3dViewerComponent
            ],
            providers: [
                DialogsService,
            ],
            entryComponents: [
                StlViewerDialogueComponent,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DialogsModule);
    return DialogsModule;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/stl-viewer-dialogue/stl-viewer-dialogue.js.map