import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnvComponent } from './create-env.component';

describe('CreateEnvComponent', () => {
  let component: CreateEnvComponent;
  let fixture: ComponentFixture<CreateEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEnvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
