import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricanCountriesComponent } from './african-countries.component';

describe('AfricanCountriesComponent', () => {
  let component: AfricanCountriesComponent;
  let fixture: ComponentFixture<AfricanCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricanCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricanCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
