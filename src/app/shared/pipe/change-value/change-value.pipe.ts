import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';

@Pipe({
  name: 'changeValue'
})
export class ChangeValuePipe implements PipeTransform {

  constructor(private datePipe : DatePipe, private decimalPipe :  DecimalPipe) {};
  transform(data, detail, jsonName?) : unknown 
  {
    var jsonNameTemp = jsonName ? jsonName : detail.jsonName;
    var value = '';
    if(this.checkTypeJsonNameDetail(jsonNameTemp))
    {
      if(detail.hidden && this.checkValue(data, detail, jsonNameTemp) == '-')
      {
        value = '-';
      }
      else
      {
        value = this.checkPrepend(detail, jsonNameTemp) + this.checkValue(data, detail, jsonNameTemp) + this.checkAppend(detail, jsonNameTemp);
      }
    }
    else
    {
      var index = 1;
      jsonNameTemp.forEach((jsonName) => {
        if(detail.hidden && this.checkValue(data, detail, jsonName) == '-')
        {
          value = value;
        }
        else
        {
          value = value + this.checkSeperator(detail, index) + this.checkPrepend(detail, jsonName) + this.checkValue(data, detail, jsonName) + this.checkAppend(detail, jsonName);
          index++;
        }
      });
    }

    return value;
  }
  
  checkValue(data, detail, jsonName)
  {
    if(detail.booleanValue && detail.booleanValue[jsonName])
    {
      return data[jsonName] ? detail.booleanValue[jsonName].trueValue : detail.booleanValue[jsonName].falseValue;
    }
    else if(detail.altValue && detail.altValue[jsonName] && detail.altValue[jsonName][data[jsonName]])
    {
      return data[jsonName] ? detail.altValue[jsonName][data[jsonName]] :  '-';
    }
    else if(detail.isDate && detail.isDate[jsonName])
    {
      if (jsonName == "createdDate" || jsonName == "modifiedDate") {
        return data[jsonName] ? this.datePipe.transform(data[jsonName], 'dd-MM-yyyy HH:mm:ss') : '-';
      } else {
        return data[jsonName] ? this.datePipe.transform(data[jsonName], 'dd-MMM-yyyy') : '-';
      }
      
    }
    else if(detail.isNumber && detail.isNumber[jsonName])
    {
      return data[jsonName] != null  ? this.decimalPipe.transform(data[jsonName]) : '-';
    }
    else
    {
      return data[jsonName] != null ? data[jsonName] : '-';
    }
  }

  checkPrepend(detail, jsonName)
  {
    if(detail.prepend && detail.prepend[jsonName])
    {
      return detail.prepend[jsonName]
    }
    else
    {
      return ''
    }
  }

  checkAppend(detail,jsonName)
  {
    if(detail.append && detail.append[jsonName])
    {
      return detail.append[jsonName]
    }
    else
    {
      return ''
    }
  }

  checkSeperator(detail, index) : string
  {
    if(detail.seperator && index > 1)
    { 
      return detail.seperator;
    }
    else if(!detail.seperator && index > 1)
    { 
      return ', ';
    }
    else
    {
      return '';
    }
  }

  checkTypeJsonNameDetail(jsonName)
  {
    return typeof jsonName === 'string';
  }

}
