
import { FormControl, Validators } from '@angular/forms';
import { duplicate } from '../validator/duplicate.validator';

export class InsertValidator
{

  constructor(input, SharedService?, jsonName?)
  {
    var ValidatorsArray = [];
    var AsyncValidatorsArray = [];
    var regex = "";
    switch (input.type) {
      case "number":
        regex = input.isNegative ? `^-?[0-9]{0,${input.maxlength}}$` : `^[0-9]{0,${input.maxlength}}$`
        ValidatorsArray.push(Validators.pattern(regex));
        input.maxValue ? ValidatorsArray.push(Validators.max(input.maxValue)) : null;
        input.minValue ? ValidatorsArray.push(Validators.min(input.minValue)) : null;
        input.minlength ? ValidatorsArray.push(Validators.minLength(input.minlength)) : null;
        input.required ? ValidatorsArray.push(Validators.required) : null;
        return new FormControl(input.value != null ? input.value : '', ValidatorsArray);
      case "select":
        if(jsonName)
        {
          input.option.forEach((option) =>
          {
            var value = '';
            value = option.value[jsonName].toString().replace("(", '\\(');
            value = value.replace(")", '\\)');
            regex = regex + `^${value}$|`;
          })
          regex = regex.slice(0, regex.length-1);
          ValidatorsArray.push(Validators.pattern(regex));
          input.required ? ValidatorsArray.push(Validators.required) : null;
          return new FormControl(input.value && input.value[jsonName] ? input.value[jsonName] : '', ValidatorsArray);
        }
        else
        {
          input.option.forEach((option) =>
          {
            var value = '';
            value = option.value.toString().replace("(", '\\(');
            value = value.replace(")", '\\)');
            regex = regex + `^${value}$|`;
          })
          regex = regex.slice(0, regex.length-1);
          ValidatorsArray.push(Validators.pattern(regex));
          input.required ? ValidatorsArray.push(Validators.required) : null;
          return new FormControl(input.value ? input.value : '', ValidatorsArray);
        }
      case "select-children":
        if(jsonName)
        {
          input.option.forEach((option) =>
          {
            var value = '';
            value = option.value[jsonName].toString().replace("(", '\\(');
            value = value.replace(")", '\\)');
            regex = regex + `^${value}$|`;
          })
          regex = regex.slice(0, regex.length-1);
          ValidatorsArray.push(Validators.pattern(regex));
          input.required ? ValidatorsArray.push(Validators.required) : null;
          return new FormControl(input.value && input.value[jsonName] ? input.value[jsonName] : '', ValidatorsArray);
        }
        else
        {
          input.option.forEach((option) =>
          {
            var value = '';
            value = option.value.toString().replace("(", '\\(');
            value = value.replace(")", '\\)');
            regex = regex + `^${value}$|`;
          })
          regex = regex.slice(0, regex.length-1);
          ValidatorsArray.push(Validators.pattern(regex));
          input.required ? ValidatorsArray.push(Validators.required) : null;
          return new FormControl(input.value ? input.value : '', ValidatorsArray);
        }
      case "radio":
        input.option.forEach((option) =>
        {
          regex = regex + `^${option.value}$|`;
        })
        regex= regex.slice(0, regex.length-1);
        ValidatorsArray.push(Validators.pattern(regex));
        input.required ? ValidatorsArray.push(Validators.required) : null;
        return new FormControl(input.value ? input.value : '', ValidatorsArray);
      case "radio-children":
          input.option.forEach((option) =>
          {
            regex = regex + `^${option.value}$|`;
          })
          regex= regex.slice(0, regex.length-1);
          ValidatorsArray.push(Validators.pattern(regex));
          input.required ? ValidatorsArray.push(Validators.required) : null;
          return new FormControl(input.value ? input.value : '', ValidatorsArray);  
      case "text": { 
        input.maxlength ? ValidatorsArray.push(Validators.maxLength(input.maxlength)) : null;
        input.minlength ? ValidatorsArray.push(Validators.minLength(input.minlength)) : null;
        input.required ? ValidatorsArray.push(Validators.required) : null;
        input.duplicateUrl ? AsyncValidatorsArray.push(new duplicate().duplicateAsyncValidator(SharedService, input.duplicateUrl, input.value ? input.value : '')) : null;
        return new FormControl(input.value ? input.value : '', ValidatorsArray, AsyncValidatorsArray);
       }
       case "date": { 
       
        input.required ? ValidatorsArray.push(Validators.required) : null;
        input.duplicateUrl ? AsyncValidatorsArray.push(new duplicate().duplicateAsyncValidator(SharedService, input.duplicateUrl, input.value ? input.value : '')) : null;
        return new FormControl(input.value ? input.value : '', ValidatorsArray, AsyncValidatorsArray);
       }
       case "multiple-checkbox": { 
        input.maxlength ? ValidatorsArray.push(Validators.maxLength(input.maxlength)) : null;
        input.minlength ? ValidatorsArray.push(Validators.minLength(input.minlength)) : null;
        input.required ? ValidatorsArray.push(Validators.required) : null;
        input.duplicateUrl ? AsyncValidatorsArray.push(new duplicate().duplicateAsyncValidator(SharedService, input.duplicateUrl, input.value ? input.value : '')) : null;
        return new FormControl(input.value ? input.value : '', ValidatorsArray, AsyncValidatorsArray);
       }
       case "text-area": { 
        input.maxlength ? ValidatorsArray.push(Validators.maxLength(input.maxlength)) : null;
        input.minlength ? ValidatorsArray.push(Validators.minLength(input.minlength)) : null;
        input.required ? ValidatorsArray.push(Validators.required) : null;
        return new FormControl(input.value ? input.value : '', ValidatorsArray);
       }
       case "modal": {
        input.required ? ValidatorsArray.push(Validators.required) : null;
        return new FormControl(input.value ? input.value[jsonName] ? input.value[jsonName] : '' : '', ValidatorsArray);
       }
       case "address": {
        input.required ? ValidatorsArray.push(Validators.required) : null;
        return new FormControl(input.value ? input.value[jsonName] ? input.value[jsonName] : '' : '', ValidatorsArray);
       }
       case "non-input":
        {
          return new FormControl(input.value ? input.value : '');
        }
        case "hidden":
        {
          input.required ? ValidatorsArray.push(Validators.required) : null;
          return new FormControl(input.value ? input.value : '', ValidatorsArray);
        }
      }
  }

}