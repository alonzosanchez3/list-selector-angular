import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'ellipsis'})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, maxLength: number=90): string {
    if(!value) {
      return ''
    }
    if(value.length > maxLength) {
      return value.substring(0, maxLength) + '...'
    }

    return value
  }
}