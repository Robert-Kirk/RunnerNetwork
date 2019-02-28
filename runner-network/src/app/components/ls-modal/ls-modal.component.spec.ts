import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsModalComponent } from './ls-modal.component';

describe('LsModalComponent', () => {
  let component: LsModalComponent;
  let fixture: ComponentFixture<LsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
