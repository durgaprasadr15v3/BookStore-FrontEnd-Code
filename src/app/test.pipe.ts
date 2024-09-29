import { Pipe, PipeTransform } from '@angular/core';
import * as $ from 'jquery';


@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(person:any,wish:String): string {
    if(person.gender=='f')
    {
      return `hello queen  ${person.name} ${wish}`
    }
    else 
    {
      return `hello king  ${person.name} ${wish}`

    }
  }

}
