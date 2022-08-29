import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterItemComponent } from './parameter-item.component';

describe('ParameterItemComponent', () => {
  let component: ParameterItemComponent;
  let fixture: ComponentFixture<ParameterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParameterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
