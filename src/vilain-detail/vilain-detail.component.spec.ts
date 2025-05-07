import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilainDetailComponent } from './vilain-detail.component';

describe('VilainDetailComponent', () => {
  let component: VilainDetailComponent;
  let fixture: ComponentFixture<VilainDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VilainDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VilainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
