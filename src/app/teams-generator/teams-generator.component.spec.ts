import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsGeneratorComponent } from './teams-generator.component';

describe('TeamsGeneratorComponent', () => {
  let component: TeamsGeneratorComponent;
  let fixture: ComponentFixture<TeamsGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
