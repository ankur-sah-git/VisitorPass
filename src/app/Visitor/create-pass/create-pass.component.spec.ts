import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassComponent } from './create-pass.component';

describe('CreatePassComponent', () => {
  let component: CreatePassComponent;
  let fixture: ComponentFixture<CreatePassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePassComponent]
    });
    fixture = TestBed.createComponent(CreatePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
