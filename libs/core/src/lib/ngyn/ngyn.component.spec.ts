import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgynComponent } from './ngyn.component';

describe('NgynComponent', () => {
  let component: NgynComponent;
  let fixture: ComponentFixture<NgynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgynComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
