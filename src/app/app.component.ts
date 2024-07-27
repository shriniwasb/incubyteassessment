import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public input: string = '';
  public result: number = 0;

  add(): void {
    if (!this.input) {
      this.result = 0;
      return;
    }

    let delimiter = ',';
    // Replace new lines with the delimiter or comma
    this.input = this.input.replace(/\n/g, delimiter);
    
    //creating array from string of numbers
    const numbers = this.input.replace(/\n/g, ',').split(',');
    let sum = 0;

    //doing sum of the numbers from the array
    for (let num of numbers) {
      if (num.trim()) {
        sum += parseInt(num, 10);
      }
    }

    //sum
    this.result = sum;
  }
}
