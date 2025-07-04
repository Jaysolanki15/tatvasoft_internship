import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SForm } from './s-form';

describe('SForm', () => {
  let component: SForm;
  let fixture: ComponentFixture<SForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
