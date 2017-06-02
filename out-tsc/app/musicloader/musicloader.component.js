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
export var MusicloaderComponent = (function () {
    function MusicloaderComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.musicItems = {
            title: "Music",
            items: [{ title: "Nocturne in C# Minor - Chopin", description: "Afshawn Lotfi performing Nocturne in C# Minor - Chopin.",
                    videoId: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Xnp8pUr99cc") },
                { title: "Minute Walz Op. 64 No. 1 - Chopin", description: "Afshawn Lotfi performing Minute Walz Op. 64 No. 1 - Chopin.",
                    videoId: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/h3sIEd0DcE4") }] };
    }
    MusicloaderComponent = __decorate([
        Component({
            selector: 'app-musicloader',
            templateUrl: './musicloader.component.html',
            styleUrls: ['./musicloader.component.css']
        }), 
        __metadata('design:paramtypes', [DomSanitizer])
    ], MusicloaderComponent);
    return MusicloaderComponent;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/musicloader/musicloader.component.js.map