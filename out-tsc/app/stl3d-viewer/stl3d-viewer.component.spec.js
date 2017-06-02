import { async, TestBed } from '@angular/core/testing';
import { Stl3dViewerComponent } from './stl3d-viewer.component';
describe('Stl3dViewerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [Stl3dViewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(Stl3dViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/stl3d-viewer/stl3d-viewer.component.spec.js.map