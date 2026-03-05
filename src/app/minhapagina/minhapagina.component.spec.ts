import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhapaginaComponent } from './minhapagina.component';

describe('MinhapaginaComponent', () => {
  let component: MinhapaginaComponent;
  let fixture: ComponentFixture<MinhapaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhapaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhapaginaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
