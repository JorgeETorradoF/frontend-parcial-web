import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoComponent } from './contratos.component';

describe('ContratosComponent', () => {
  let component: ContratoComponent;
  let fixture: ComponentFixture<ContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
