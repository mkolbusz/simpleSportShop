import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number, ellipsis: string = '...'): string {
    return value.split(' ').slice(0, limit).join(' ') + ellipsis;
  }

}
