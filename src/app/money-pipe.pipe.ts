import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyPipe'
})
export class MoneyPipePipe implements PipeTransform {

  transform(val: number): string {
    return "$"+val.toPrecision(3);
  }

}
