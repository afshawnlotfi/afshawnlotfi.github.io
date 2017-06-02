var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { NgWaveComponent } from './ng-wave/ng-wave.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { DialogsModule } from './stl-viewer-dialogue/stl-viewer-dialogue';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from '@angular/router';
import { CodeprojectsComponent } from './codeprojects/codeprojects.component';
import { CircuitsprojectsComponent } from './circuitsprojects/circuitsprojects.component';
import { FilmsloaderComponent } from './filmsloader/filmsloader.component';
import { MusicloaderComponent } from './musicloader/musicloader.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: ':slug', component: TabsComponent },
];
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NgWaveComponent,
                AboutPageComponent,
                ProjectsPageComponent,
                TabsComponent,
                CodeprojectsComponent,
                CircuitsprojectsComponent,
                FilmsloaderComponent,
                MusicloaderComponent,
                PageFooterComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                MaterialModule.forRoot(),
                DialogsModule,
                RouterModule.forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/app.module.js.map