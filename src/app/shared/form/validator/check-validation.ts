export class CheckValid
{
    constructor(input, formGroup)
    {
        if(typeof input.jsonName == 'string')
        {
          return formGroup.get(input.jsonName).touched && formGroup.get(input.jsonName).valid;
        }
        else 
        {
          var check : boolean = true;
          input.jsonName.forEach((jsonName) => {
            check = check && formGroup.get(jsonName).touched && formGroup.get(jsonName).valid;
          });
          return check;
        }
    }
}

export class CheckInvalid
{
    constructor(input, formGroup)
    {
        if(typeof input.jsonName == 'string')
        {
          return formGroup.get(input.jsonName).touched && formGroup.get(input.jsonName).invalid;
        }
        else 
        {
          var check : boolean = false;
          input.jsonName.forEach((jsonName) => {
            check = check || (formGroup.get(jsonName).touched && formGroup.get(jsonName).invalid);
          });
          return check;
        }
    }
}

export class CheckError
{
    constructor(input, formGroup, typeError)
    {
        if(typeof input.jsonName == 'string')
        {
          return formGroup.get(input.jsonName).touched && formGroup.get(input.jsonName).errors && formGroup.get(input.jsonName).errors[typeError];
        }
        else 
        {
          var check : boolean = false;
          input.jsonName.forEach((jsonName) => {
            check = check || (formGroup.get(jsonName).touched && formGroup.get(jsonName).errors && formGroup.get(jsonName).errors[typeError]);
          });
          return check;
        }
    }
}

