var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef } from '@angular/core';
import { DialogsService } from '../stl-viewer-dialogue/stl-viewer-dialogue.service';
export var CircuitsprojectsComponent = (function () {
    function CircuitsprojectsComponent(dialogsService, viewContainerRef) {
        this.dialogsService = dialogsService;
        this.viewContainerRef = viewContainerRef;
        this.electronicsItems = { title: "Circuits",
            category: "electronicsSkills",
            experiences: [],
            items: [
                {
                    title: "Afshawn Watch 1.0",
                    subtitle: "The Ultimate Hacker Watch",
                    description: "Using an old PiTFT, some resistors to act as a voltage drop, an Arduino Mini, a Lithium Polymer Battery, and some buttons I was able to make my own watch",
                    images: ["afshawn_watch.png"],
                    buttons: [{ title: "View Source Code", href: "https://github.com/afshawnlotfi/afshawn_watch" }],
                    cad: ["assets/cad/afshawn-watch/stl-files/afshawn_watch_base.stl", "assets/cad/afshawn-watch/stl-files/afshawn_watch_top.stl"]
                },
                {
                    title: "Arduino Bluetooth Authenticator",
                    subtitle: "Easier Security",
                    description: "Using an ATMEGA328 Chip, a Bluetooth tranciever, and an LCD I was able to create a authenticator circuit that communicates authenticator codes through serial.",
                    images: ["bt_auth.JPG", "bt_auth2.JPG"],
                    buttons: [],
                    cad: []
                },
                {
                    title: "Brain Controlled Bionic Hand",
                    subtitle: "It'll blow your mind",
                    description: "Using a standard 3d-Printer, fishing wire, some servo motors, an Arduino, and  a MindFlex module, I was able to interact with a bionic hand through concentration levels in the brain",
                    images: ["bionic1.JPG", "bionic2.JPG"],
                    buttons: [],
                    cad: []
                },
                {
                    title: "Solar Powered Airplane",
                    subtitle: "Up, Up, and Away",
                    description: "I built a plane powered by 30 solar cells wired in series and two wing motors. Each cell provided roughly 2.3V and 50mA of power providing enough power to lift the plane off the ground",
                    images: ["solar_plane.png"],
                    buttons: [],
                    cad: []
                },
                {
                    title: "3D Printed Actin Model",
                    subtitle: "Another way of looking at it",
                    description: "Finding an actin protein off RCSB I was able to convert the pdb file into stl and 3D print a transluscent model. From their I installed RGB LEDs to represent the different bonds within the protein",
                    images: ["protein_model.JPG"],
                    buttons: [],
                    cad: []
                },
                {
                    title: "2D Projection",
                    subtitle: "Less than $100 Google Glass",
                    description: "I was intrigued by augmented reality when Google Glass came out. To learn about how Google did it I wanted to make my own from scratch. I have worked on a project that used a two-dimensional translucent image created through reflection of light against projection film.",
                    images: ["projection.JPG"],
                    buttons: [{ title: "Source Code Coming Soon!", href: "" }],
                    cad: ["assets/cad/2d-projection/stl-files/apparatus.stl", "assets/cad/2d-projection/stl-files/topframe.stl"]
                }
            ]
        };
    }
    CircuitsprojectsComponent.prototype.openDialog = function (cad) {
        this.dialogsService
            .confirm('Confirm Dialog', cad, this.viewContainerRef);
    };
    CircuitsprojectsComponent = __decorate([
        Component({
            selector: 'app-circuitsprojects',
            templateUrl: './circuitsprojects.component.html',
            styleUrls: ['./circuitsprojects.component.css']
        }), 
        __metadata('design:paramtypes', [DialogsService, ViewContainerRef])
    ], CircuitsprojectsComponent);
    return CircuitsprojectsComponent;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/circuitsprojects/circuitsprojects.component.js.map