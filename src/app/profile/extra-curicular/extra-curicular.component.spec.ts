import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCuricularComponent } from './extra-curicular.component';

describe('ExtraCuricularComponent', () => {
  let component: ExtraCuricularComponent;
  let fixture: ComponentFixture<ExtraCuricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraCuricularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraCuricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
