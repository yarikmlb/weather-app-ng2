import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windLine'
})
export class WindLinePipe implements PipeTransform {

  transform(value: any): any {
    let windDirection = '';
    switch (true) {
      case (value > 11.25 && value <= 33.75):
        windDirection = 'North-northeast';
        break;
      case (value > 33.75 && value <= 56.25):
        windDirection = 'Northeast';
        break;
      case (value > 56.25 && value <= 78.75):
        windDirection = 'East-northeast	';
        break;
      case (value > 78.75 && value <= 101.25):
        windDirection = 'East';
        break;
      case (value > 101.25 && value <= 123.75):
        windDirection = 'East-southeast';
        break;
      case (value > 123.75 && value <= 146.25):
        windDirection = 'Southeast';
        break;
      case (value > 146.25 && value <= 168.75):
        windDirection = 'South-southeast';
        break;
      case (value > 168.75 && value <= 191.25):
        windDirection = 'South';
        break;
      case (value > 191.25 && value <= 213.75):
        windDirection = 'South-southwest';
        break;
      case (value > 213.75 && value <= 236.25):
        windDirection = 'Southwest';
        break;
      case (value > 236.25 && value <= 258.75):
        windDirection = 'West-southwest';
        break;
      case (value > 258.75 && value <= 281.25):
        windDirection = 'West';
        break;
      case (value > 281.25 && value <= 303.75):
        windDirection = 'West-northwest';
        break;
      case (value > 303.75 && value <= 326.25):
        windDirection = 'Northwest';
        break;
      case (value > 326.25 && value <= 348.75):
        windDirection = 'North-northwest';
        break;
      case (value > 348.75 || value <= 11.25):
        windDirection = 'North';
        break;
      default:
        windDirection = 'Breeze'
    }
    return windDirection;
  }

}
