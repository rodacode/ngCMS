import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeSeoComponent } from './backoffice-seo.component';

describe('BackofficeSeoComponent', () => {
  let component: BackofficeSeoComponent;
  let fixture: ComponentFixture<BackofficeSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
