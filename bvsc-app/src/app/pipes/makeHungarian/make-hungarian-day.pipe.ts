import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeHungarianDay'
})
export class MakeHungarianDayPipe implements PipeTransform {

  transform(timestamp: number): string {
    if (new Date(timestamp).getDay() === new Date().getDay()) {
      return 'Ma';
    } else {
      return this.findHungarianDay(new Date(timestamp).getDay());
    }
  }

  findHungarianDay(day: number) {
    switch (day) {
      case 1:
        return 'H';
      case 2:
        return 'K';
      case 3:
        return 'Sze';
      case 4:
        return 'Cs';
      case 5:
        return 'P';
      case 6:
        return 'Szo';
      case 0:
        return 'V';
    }
  }

}
