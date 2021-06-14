import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaotepanelComponent } from './xiaotepanel.component';

describe('XiaotepanelComponent', () => {
  let component: XiaotepanelComponent;
  let fixture: ComponentFixture<XiaotepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XiaotepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XiaotepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
