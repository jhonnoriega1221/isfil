import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistrarActivoComponent } from './form-registrar-activo.component';

describe('FormRegistrarActivoComponent', () => {
  let component: FormRegistrarActivoComponent;
  let fixture: ComponentFixture<FormRegistrarActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistrarActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistrarActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
