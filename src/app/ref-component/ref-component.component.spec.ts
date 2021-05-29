import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefComponentComponent } from './ref-component.component';

describe('RefComponentComponent', () => {
  let component: RefComponentComponent;
  let fixture: ComponentFixture<RefComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
