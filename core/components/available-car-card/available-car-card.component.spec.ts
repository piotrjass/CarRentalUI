import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCarCardComponent } from './available-car-card.component';

describe('AvailableCarCardComponent', () => {
  let component: AvailableCarCardComponent;
  let fixture: ComponentFixture<AvailableCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableCarCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
