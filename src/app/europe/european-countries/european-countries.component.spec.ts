import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeanCountriesComponent } from './european-countries.component';

describe('EuropeanCountriesComponent', () => {
  let component: EuropeanCountriesComponent;
  let fixture: ComponentFixture<EuropeanCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeanCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeanCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
