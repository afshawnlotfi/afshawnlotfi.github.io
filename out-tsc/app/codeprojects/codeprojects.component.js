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
export var CodeprojectsComponent = (function () {
    function CodeprojectsComponent() {
        this.selectedItem = { works: [] };
        this.codeItems = {
            title: "Code Projects",
            category: "fluentLanguages",
            experiences: [
                { item: "Python",
                    experienceTime: "6 years",
                    description: "Programmed using Python PyQT/PySide Framework to make user interfaces. " +
                        "Implemented Graphical User Interface, used machine-learning and voice recognition to find " +
                        "files and to receive information more intuitively.",
                    works: [{ title: "DPOM OS", href: "https://github.com/afshawnlotfi/dpomos" },
                        { title: "Afshawn Watch", href: "https://github.com/afshawnlotfi/afshawn_watch" },
                        { title: "Audatica OS", href: "https://github.com/afshawnlotfi/audaticaos" }] },
                { item: "Swift",
                    experienceTime: "2 years",
                    description: "Programmed WebKit based application. Estimated release sometime in May 2017.",
                    works: [{ title: "Quiz Game Example", href: "https://github.com/afshawnlotfi/QuestionQuizExample" }] },
                { item: "JavaScript",
                    experienceTime: "2 years",
                    description: "Programmed using JavaScript Angular JS/2.0 Framework to write the frontend of real-time websites.Programmed using JavaScript Ionic Framework to program cross platform (Android and IOS) apps ",
                    works: [{ title: "Ionic Starter Template", href: "https://github.com/afshawnlotfi/ionicstartertemplate" }] },
                { item: "HTML",
                    experienceTime: "4 years",
                    description: "Programmed using HTML Bootstrap Framework and created several websites including my personal blog, afshawn.org, and audatica.com.Programed using HTML Materialize Framework a local website that I could use to visually transfer files at home.",
                    works: [{ title: "Audatica", href: "http://www.audatica.com" }, { title: "Afshawn Dot Org", href: "." }] },
                { item: "C",
                    experienceTime: "2 years",
                    description: "Programmed using C++ based Arduino software for a number of projects including a smartwatch, a Bluetooth authenticator, and various sensor circuits. Programmed using C++ based Processing software such as a target game",
                    works: [{ title: "Afshawn Watch", href: "https://github.com/afshawnlotfi/afshawn_watch" }, { title: "Target Game", href: "https://github.com/afshawnlotfi/Targetgame" }] },
            ],
            items: [
                {
                    title: "Audatica OS",
                    subtitle: "Creativity is Yours",
                    description: "A GUI written in PyQt thats creativitity is up to you.",
                    images: ["ui1.png", "ui2.png"],
                    buttons: [{ title: "View Source Code", href: "https://github.com/afshawnlotfi/audaticaos" }],
                    cad: []
                },
                {
                    title: "DPOM OS",
                    subtitle: "Math Team Software",
                    description: "Named after my math teacher's nickname, this was a software to alleviate the tedious task of logging math team information into a spreadsheet. With DPOM OS math teachers everywhere can log member information, attendance, dues paid, and tournament information straight from the program.",
                    images: ["dpomos1.png", "dpomos2.png"],
                    buttons: [{ title: "View Source Code", href: "https://github.com/afshawnlotfi/dpomos" }],
                    cad: []
                },
                {
                    title: "Quiz Example",
                    subtitle: "Template for designing beatiful quiz apps written in Swift",
                    description: "This is a simple Swift multiple choice application for IOS written in Swift. Just put in pictures and questions in the main dictionary and your questions are generated",
                    images: ["quiz_game.png"],
                    buttons: [{ title: "View Source Code", href: "https://github.com/afshawnlotfi/QuestionQuizExample" }],
                    cad: []
                }
            ]
        };
    }
    CodeprojectsComponent.prototype.itemChoose = function (selected) {
        this.selectedItem = this.codeItems.experiences[selected];
    };
    CodeprojectsComponent = __decorate([
        Component({
            selector: 'app-codeprojects',
            templateUrl: './codeprojects.component.html',
            styleUrls: ['./codeprojects.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CodeprojectsComponent);
    return CodeprojectsComponent;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/codeprojects/codeprojects.component.js.map