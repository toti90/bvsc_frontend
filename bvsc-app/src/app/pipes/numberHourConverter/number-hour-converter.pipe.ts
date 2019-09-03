import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberHourConverter'
})
export class NumberHourConverterPipe implements PipeTransform {

  transform(startingHour: number): string {
    if (startingHour < 10) {
      return `0${startingHour}:00`;
    } else {
      return `${startingHour}:00`;
    }
  }
}
