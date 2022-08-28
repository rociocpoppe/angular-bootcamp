import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivualTaskComponent } from './indivual-task.component';

describe('IndivualTaskComponent', () => {
  let component: IndivualTaskComponent;
  let fixture: ComponentFixture<IndivualTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivualTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndivualTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
