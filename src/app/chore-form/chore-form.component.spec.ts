import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreFormComponent } from './chore-form.component';

describe('ChoreFormComponent', () => {
  let component: ChoreFormComponent;
  let fixture: ComponentFixture<ChoreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoreFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
