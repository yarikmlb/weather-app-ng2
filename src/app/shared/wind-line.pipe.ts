import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windLine'
})
export class WindLinePipe implements PipeTransform {

  transform(value: any): any {
    let windDirection = '';
    switch (true) {
      case (value > 11.25 && value <= 33.75):
        windDirection = 'NNE';
        break;
      case (value > 33.75 && value <= 56.25):
        windDirection = 'NE';
        break;
      case (value > 56.25 && value <= 78.75):
        windDirection = 'ENE';
        break;
      case (value > 78.75 && value <= 101.25):
        windDirection = 'E';
        break;
      case (value > 101.25 && value <= 123.75):
        windDirection = 'ESE';
        break;
      case (value > 123.75 && value <= 146.25):
        windDirection = 'SE';
        break;
      case (value > 146.25 && value <= 168.75):
        windDirection = 'SSE';
        break;
      case (value > 168.75 && value <= 191.25):
        windDirection = 'S';
        break;
      case (value > 191.25 && value <= 213.75):
        windDirection = 'SSW';
        break;
      case (value > 213.75 && value <= 236.25):
        windDirection = 'SW';
        break;
      case (value > 236.25 && value <= 258.75):
        windDirection = 'WSW';
        break;
      case (value > 258.75 && value <= 281.25):
        windDirection = 'W';
        break;
      case (value > 281.25 && value <= 303.75):
        windDirection = 'WNW';
        break;
      case (value > 303.75 && value <= 326.25):
        windDirection = 'NW';
        break;
      case (value > 326.25 && value <= 348.75):
        windDirection = 'NNW';
        break;
      case (value > 348.75 || value <= 11.25):
        windDirection = 'N';
        break;
      default:
        windDirection = 'Breeze'
    }
    return windDirection;
  }

}
