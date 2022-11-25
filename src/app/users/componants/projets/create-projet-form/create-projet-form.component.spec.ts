import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjetFormComponent } from './create-projet-form.component';

describe('CreateProjetFormComponent', () => {
  let component: CreateProjetFormComponent;
  let fixture: ComponentFixture<CreateProjetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProjetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
