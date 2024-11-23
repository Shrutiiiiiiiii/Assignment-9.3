import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, parameter: string): string {
    if (!value || value < 1 || !parameter) {
      return 'Invalid input';
    }

    switch (parameter.toLowerCase()) {
      case 'prime':
        return this.isPrime(value) ? `It is Prime` : `It is not Prime`;

      case 'perfect':
        return this.isPerfect(value) ? `It is Perfect` : `It is not Perfect`;

      case 'even':
        return value % 2 === 0 ? `It is Even` : `It is not Even`;

      case 'odd':
        return value % 2 !== 0 ? `It is Odd` : `It is not Odd`;

      default:
        return 'Invalid parameter';
    }
  }

  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }
    return sum === num && num !== 1;
  }
}
