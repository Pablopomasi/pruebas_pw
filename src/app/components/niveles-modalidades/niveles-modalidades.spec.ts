import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelesModalidades } from './niveles-modalidades';

describe('NivelesModalidades', () => {
  let component: NivelesModalidades;
  let fixture: ComponentFixture<NivelesModalidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NivelesModalidades],
    }).compileComponents();

    fixture = TestBed.createComponent(NivelesModalidades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
