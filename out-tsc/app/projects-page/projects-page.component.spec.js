import { async, TestBed } from '@angular/core/testing';
import { ProjectsPageComponent } from './projects-page.component';
describe('ProjectsPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProjectsPageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProjectsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/afshawnlotfi/Documents/afshawndotorg/src/app/projects-page/projects-page.component.spec.js.map