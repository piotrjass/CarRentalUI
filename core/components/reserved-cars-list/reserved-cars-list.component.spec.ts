import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedCarsListComponent } from './reserved-cars-list.component';

describe('ReservedCarsListComponent', () => {
  let component: ReservedCarsListComponent;
  let fixture: ComponentFixture<ReservedCarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservedCarsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservedCarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
