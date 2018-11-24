import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLancComponent } from './formulario-lanc.component';

describe('FormularioLancComponent', () => {
  let component: FormularioLancComponent;
  let fixture: ComponentFixture<FormularioLancComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLancComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
