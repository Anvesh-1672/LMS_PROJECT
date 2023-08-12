import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprofilepageComponent } from './adminprofilepage.component';

describe('AdminprofilepageComponent', () => {
  let component: AdminprofilepageComponent;
  let fixture: ComponentFixture<AdminprofilepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminprofilepageComponent]
    });
    fixture = TestBed.createComponent(AdminprofilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
