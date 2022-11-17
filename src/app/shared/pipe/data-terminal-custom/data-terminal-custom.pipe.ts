import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dataTerminalCustom'
})
export class DataTerminalCustomPipe implements PipeTransform {

  transform(data): unknown {
    var fac = data.odFacilities.find(facility => facility.name == 'QRIS');
    return fac != null && fac.isActive ;
  }

}
