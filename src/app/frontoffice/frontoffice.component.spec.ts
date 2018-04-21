import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontofficeComponent } from './frontoffice.component';

describe('FrontofficeComponent', () => {
  let component: FrontofficeComponent;
  let fixture: ComponentFixture<FrontofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
