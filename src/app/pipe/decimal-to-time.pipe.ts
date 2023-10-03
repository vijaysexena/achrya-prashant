import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToTime',
})
export class DecimalToTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    return `${hours} hours ${minutes} minutes`;
  }
}
