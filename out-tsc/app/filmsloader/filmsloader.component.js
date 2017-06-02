var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export var FilmsloaderComponent = (function () {
    function FilmsloaderComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.filmItems = {
            title: "Films",
            items: [{ title: "Immigration in America", description: "CSPAN StudentCam Honorable Mention documentary explaining how immigration reform would increase the GDP, produce more jobs, and promote prosperity.",
                    videoId: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/9zUhIuTuMjQ") },
                { title: "English Decline", description: "This documentary describes the decline of English diction and usage throughout the past century through changes such as technology.",
                    videoId: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/A9jeYNd9zmQ") }] };
    }
    FilmsloaderComponent = __decorate([
        Component({
            selector: 'app-filmsloader',
            templateUrl: './filmsloader.component.html',
            styleUrls: ['./filmsloader.component.css']
        }), 
        __metadata('design:paramtypes', [DomSanitizer])
    ], FilmsloaderComponent);
    return FilmsloaderComponent;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/filmsloader/filmsloader.component.js.map