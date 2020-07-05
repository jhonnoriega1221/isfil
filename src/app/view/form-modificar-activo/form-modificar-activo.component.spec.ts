import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModificarActivoComponent } from './form-modificar-activo.component';

describe('FormModificarActivoComponent', () => {
  let component: FormModificarActivoComponent;
  let fixture: ComponentFixture<FormModificarActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModificarActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModificarActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
