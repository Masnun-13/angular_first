import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaComponent } from './eta.component';

describe('EtaComponent', () => {
  let component: EtaComponent;
  let fixture: ComponentFixture<EtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtaComponent]
    });
    fixture = TestBed.createComponent(EtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
