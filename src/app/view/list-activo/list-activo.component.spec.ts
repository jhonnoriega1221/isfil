import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivoComponent } from './list-activo.component';

describe('ListActivoComponent', () => {
  let component: ListActivoComponent;
  let fixture: ComponentFixture<ListActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
