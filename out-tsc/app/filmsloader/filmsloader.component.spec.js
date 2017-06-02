import { async, TestBed } from '@angular/core/testing';
import { FilmsloaderComponent } from './filmsloader.component';
describe('FilmsloaderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FilmsloaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FilmsloaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/filmsloader/filmsloader.component.spec.js.map