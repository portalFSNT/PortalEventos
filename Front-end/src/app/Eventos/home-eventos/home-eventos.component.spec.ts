import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventosComponent } from './home-eventos.component';

describe('HomeComponent', () => {
  let component: HomeEventosComponent;
  let fixture: ComponentFixture<HomeEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
