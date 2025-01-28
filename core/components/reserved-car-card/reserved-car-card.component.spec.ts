import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedCarCardComponent } from './reserved-car-card.component';

describe('ReservedCarCardComponent', () => {
  let component: ReservedCarCardComponent;
  let fixture: ComponentFixture<ReservedCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservedCarCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservedCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
