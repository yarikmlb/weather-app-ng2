import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pressureTransform'
})
export class PressureTransformPipe implements PipeTransform {

  transform(value: any): any {
    let pressure = value / 1.333;
    return pressure.toFixed(2);
  }

}
