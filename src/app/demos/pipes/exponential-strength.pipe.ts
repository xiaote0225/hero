import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, param?: number): number {
    return Math.pow(value, param ? (isNaN(param) ? 1 : param) : 1);
  }

}
