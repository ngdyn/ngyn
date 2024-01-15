import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgynLayoutComponent } from './layout.component';

describe('NgynLayoutComponent', () => {
  let component: NgynLayoutComponent;
  let fixture: ComponentFixture<NgynLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgynLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgynLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
