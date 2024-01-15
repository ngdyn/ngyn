import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgynFormsComponent } from './forms.component';

describe('NgynFormsComponent', () => {
  let component: NgynFormsComponent;
  let fixture: ComponentFixture<NgynFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgynFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgynFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
