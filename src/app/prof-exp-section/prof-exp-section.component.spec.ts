import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfExpSectionComponent } from './prof-exp-section.component';

describe('ProfExpSectionComponent', () => {
  let component: ProfExpSectionComponent;
  let fixture: ComponentFixture<ProfExpSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfExpSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfExpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
