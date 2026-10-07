import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestimoniosNoticias } from './testimonios-noticias';

describe('TestimoniosNoticias', () => {
  let component: TestimoniosNoticias;
  let fixture: ComponentFixture<TestimoniosNoticias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimoniosNoticias],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimoniosNoticias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
