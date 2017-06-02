import { async, TestBed } from '@angular/core/testing';
import { MusicloaderComponent } from './musicloader.component';
describe('MusicloaderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MusicloaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MusicloaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/musicloader/musicloader.component.spec.js.map