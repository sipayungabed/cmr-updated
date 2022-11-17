import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ChangeValuePipe } from '../change-value/change-value.pipe';
@Pipe({
  name: 'customTable'
})
export class CustomTablePipe implements PipeTransform {
  constructor(private datePipe : DatePipe, private decimalPipe :  DecimalPipe, private changeValue : ChangeValuePipe) {};

  transform(data, tableData): unknown {
    var value;
    if(tableData.customPipe)
    {
      switch(tableData.customPipe)
      {
        case 'reverse':
          value = data[tableData.jsonName].split(tableData.splitBy)[1] + tableData.splitBy + data[tableData.jsonName].split(tableData.splitBy)[0];
        break;
        case 'list':
          if(data[tableData.jsonName] && data[tableData.jsonName] != " ")
          {
            var array = data[tableData.jsonName].split(tableData.splitBy);
            value = '<ul class="mb-0 mt-0 pl-3 w-100">'
            array.forEach(dt => {
              value = value + '<li>' + dt + '</li>'
            });
            value = value + '</ul>'
          }
          else
          {
            value = "";
          }
        break;
      }
    }
    else
    {
      value = this.changeValue.transform(data, tableData);
    }

    return value;
  }

}
