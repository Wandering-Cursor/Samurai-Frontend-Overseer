import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseerListComponent } from './overseer-list.component';

describe('OverseerListComponent', () => {
  let component: OverseerListComponent;
  let fixture: ComponentFixture<OverseerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverseerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverseerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
