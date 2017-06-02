import { async, TestBed } from '@angular/core/testing';
import { CircuitsprojectsComponent } from './circuitsprojects.component';
describe('CircuitsprojectsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CircuitsprojectsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CircuitsprojectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/circuitsprojects/circuitsprojects.component.spec.js.map