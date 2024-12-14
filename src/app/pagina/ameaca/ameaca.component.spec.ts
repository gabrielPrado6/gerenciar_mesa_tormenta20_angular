import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeacaComponent } from './ameaca.component';

describe('AmeacaComponent', () => {
  let component: AmeacaComponent;
  let fixture: ComponentFixture<AmeacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmeacaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmeacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
