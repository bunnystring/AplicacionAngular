import { Pipe, PipeTransform } from '@angular/core';
import { MutansModel } from '@core/models/mutanst.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args:string | null = null, sort:string = 'asc'): MutansModel[] {
  try {
    if (args === null) {
      return value
    }else{
      const tmpList = value.sort((a, b) => {
        if (a[args] < b[args]) {
          return -1;
        }
        if (a[args] === b[args]) {
          return 0;
        }
        if (a[args] > b[args]) {
          return 1;
        }
        return 1;
      });
    return (sort === 'asc') ? tmpList :tmpList.reverse()
    }
  } catch (e) {
    console.log('Algo paso!')
    return value
  }
  }

}
