import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgynConfigComponent } from './config.component';

describe('NgynConfigComponent', () => {
  let component: NgynConfigComponent;
  let fixture: ComponentFixture<NgynConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgynConfigComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgynConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
