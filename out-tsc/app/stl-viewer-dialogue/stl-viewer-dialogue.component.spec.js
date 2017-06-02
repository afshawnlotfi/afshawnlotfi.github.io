import { async, TestBed } from '@angular/core/testing';
import { StlViewerDialogueComponent } from './stl-viewer-dialogue.component';
describe('StlViewerDialogueComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [StlViewerDialogueComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(StlViewerDialogueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/stl-viewer-dialogue/stl-viewer-dialogue.component.spec.js.map