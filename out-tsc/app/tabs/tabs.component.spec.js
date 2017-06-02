import { async, TestBed } from '@angular/core/testing';
import { TabsComponent } from './tabs.component';
describe('TabsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TabsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/tabs/tabs.component.spec.js.map