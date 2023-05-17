import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZetaComponent } from './zeta.component';

describe('ZetaComponent', () => {
  let component: ZetaComponent;
  let fixture: ComponentFixture<ZetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZetaComponent]
    });
    fixture = TestBed.createComponent(ZetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
