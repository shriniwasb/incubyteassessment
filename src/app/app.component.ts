import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public input: string = '';
  public result: number = 0;

  add() {
    if (!this.input) {
      this.result = 0;
      return;
    }

    let delimiter = ',';
    let numbersString = this.input.toString();

    // Check for custom delimiter
    if (this.input.startsWith('//')) {
      // Extract the delimiter from the input
      let delimiterEndIndex = numbersString.indexOf('\n');
      delimiter = this.input.substring(2, delimiterEndIndex);
      numbersString = this.input.substring(delimiterEndIndex + 1);
    }

    // Replace new lines with the delimiter
    numbersString = numbersString.replace(/\n/g, delimiter);

    // Split by the delimiter and sum up
    const numbers = numbersString.split(delimiter);
    let sum = 0;

    const negativeNumbers: number[] = [];
    //doing sum of the numbers from the array
    for (let num of numbers) {
      const number = parseInt(num, 10);
      if (num.trim()) {
        if (number < 0) {
          negativeNumbers.push(number);
        } else {
          sum += parseInt(num, 10);
        }
      }
    }

    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed`);
    }

    //sum
    this.result = sum;
  }
}
