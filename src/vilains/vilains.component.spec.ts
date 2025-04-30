import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilainsComponent } from './vilains.component';

describe('VilainsComponent', () => {
  let component: VilainsComponent;
  let fixture: ComponentFixture<VilainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VilainsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
