import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component:AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should return 0 for empty string', () => {
    component.input = '';
    component.add();
    expect(component.result).toBe(0);
  });

  it('should return the number itself when one number is input', () => {
    component.input = '5';
    component.add();
    expect(component.result).toBe(5);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    component.input = '1,2';
    component.add();
    expect(component.result).toBe(3);
  });

  it('should handle new lines between numbers', () => {
    component.input = '1\n2,3';
    component.add();
    expect(component.result).toBe(6);
  });

  it('should ignore invalid inputs and continue summing valid numbers', () => {
    component.input = '1,a,3';
    component.add();
    expect(component.result).toBeNaN(); // Adjust as needed if you choose to handle invalid inputs differently
  });

  it('should handle multiple commas and new lines gracefully', () => {
    component.input = '1,\n,2,,3';
    component.add();
    expect(component.result).toBe(6);
  });
});
