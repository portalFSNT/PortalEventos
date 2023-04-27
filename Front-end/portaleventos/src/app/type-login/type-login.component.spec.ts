import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeLoginComponent } from './type-login.component';

describe('TypeLoginComponent', () => {
  let component: TypeLoginComponent;
  let fixture: ComponentFixture<TypeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
