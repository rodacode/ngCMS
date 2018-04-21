import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeImagesComponent } from './backoffice-images.component';

describe('BackofficeImagesComponent', () => {
  let component: BackofficeImagesComponent;
  let fixture: ComponentFixture<BackofficeImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackofficeImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
