import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NigeriaComponent } from './nigeria.component';

describe('NigeriaComponent', () => {
  let component: NigeriaComponent;
  let fixture: ComponentFixture<NigeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NigeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NigeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
