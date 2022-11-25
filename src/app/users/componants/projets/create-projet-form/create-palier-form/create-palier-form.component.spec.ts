import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePalierFormComponent } from './create-palier-form.component';

describe('CreatePalierFormComponent', () => {
  let component: CreatePalierFormComponent;
  let fixture: ComponentFixture<CreatePalierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePalierFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePalierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
