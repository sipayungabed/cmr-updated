import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputDetails } from '../../model/input-model';
import { SharedService } from 'src/app/shared/service/api-shared/shared.service';
import { Option } from 'src/app/shared/table/model/table-model';
import { CheckValid, CheckInvalid, CheckError } from '../../validator/check-validation';


@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {

  @Input() input : InputDetails;
  @Input() formGroup : FormGroup;
  @Output() onChangeEvent = new EventEmitter<any>();
  befValue;
  value : any = '';
  status;
  indented : string;
  colLabel  : string;
  colInput : string;
  valid;
  invalid;
  error = {required : null, pattern : null};
  constructor(private SharedService : SharedService) { }

  ngOnInit(): void {
    this.setGrid();
    if(this.input.selectApiConfiguration)
    {
      this.getOption();
    }
    else
    {
      this.status = "success";
      this.insertInitValue();
    }
    this.befValue = this.value;
  }

  getOption()
  {
    this.status = "loading";
    this.SharedService.getData(this.input.selectApiConfiguration.apiUrl).subscribe((response)=>
    {
      if(response)
      {
        response.body.content.forEach(data => {
          var key = this.input.selectApiConfiguration.valuesKey[this.input.selectApiConfiguration.displayKey] ? 
                    data[this.input.selectApiConfiguration.valuesKey[this.input.selectApiConfiguration.displayKey]] : 
                    data[this.input.selectApiConfiguration.displayKey];
          var value = {};
          if(typeof this.input.jsonName == 'string')
          {
            value = data[this.input.selectApiConfiguration.valuesKey]
          }
          else if(typeof this.input.jsonName == 'object') 
          {
            this.input.jsonName.forEach(jsonName => {
              value[jsonName] = data[this.input.selectApiConfiguration.valuesKey[jsonName]]
            });
          }
          this.input.option.push({key, value} as Option)
        });
        this.insertInitValue();
        this.status = "success";
      }
      else
      {
        this.status = "failed";
      }
    })
  }

  setGrid()
  {
    this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``  
    this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`
    this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`
  }

  insertInitValue()
  {
    console.log(this.input.option);
    if(typeof this.input.jsonName == 'string' && this.formGroup.get(this.input.jsonName).value)
    {
      var valueTemp = {};
      valueTemp = this.input.option.find((opt) => opt.value == this.formGroup.get(this.input.jsonName).value);
      this.value = valueTemp['value'];
    }
    else if(typeof this.input.jsonName == 'object' && this.formGroup.get(this.input.benchmark).value) 
    {
      var valueTemp = {};
      valueTemp = this.input.option.find((opt) => opt.value[this.input.benchmark] == this.formGroup.get(this.input.benchmark).value);
      this.value = valueTemp['value'];
    }
  }

  changeEvent()
  {
    console.log(this.formGroup)
    if(typeof this.input.jsonName == 'string')
    {

      this.formGroup.get(this.input.jsonName).setValue(this.value);
      this.formGroup.get(this.input.jsonName).markAsTouched();
      this.formGroup.get(this.input.jsonName).markAsDirty();
      var formGroup = this.formGroup;
      var befValue = this.befValue;
      this.onChangeEvent.emit({formGroup, befValue});
      this.befValue = this.value;
    }
    else
    {
      this.input.jsonName.forEach(jsonName => {
        this.formGroup.get(jsonName).setValue(this.value[jsonName]);
        this.formGroup.get(jsonName).markAsTouched();
        this.formGroup.get(jsonName).markAsDirty();
      });
      var formGroup = this.formGroup;
      var befValue = this.befValue;
      this.onChangeEvent.emit({formGroup, befValue});
      this.befValue = this.formGroup.get(this.input.benchmark).value;
    }
    this.valid = this.checkValid(this.input);
    this.invalid = this.checkInvalid(this.input);
    this.error.required = this.checkError(this.input, 'required'); 
    this.error.pattern = this.checkError(this.input, 'pattern'); 
    console.log(this.formGroup)
  }
  
  checkValid(input)
  {
    if(typeof input.jsonName == 'string')
    {
      return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).valid;
    }
    else 
    {
      var check : boolean = true;
      input.jsonName.forEach((jsonName) => {
        check = check && this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).valid;
      });
      return check;
    }
  }

  checkInvalid(input)
  {
    if(typeof input.jsonName == 'string')
    {
      return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).invalid;
    }
    else 
    {
      var check : boolean = false;
      input.jsonName.forEach((jsonName) => {
        check = check || (this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).invalid);
      });
      return check;
    }
  }

  checkError(input, typeError)
  {
    if(typeof input.jsonName == 'string')
    {
      return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).errors && this.formGroup.get(input.jsonName).errors[typeError];
    }
    else 
    {
      var check : boolean = false;
      input.jsonName.forEach((jsonName) => {
        check = check || (this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).errors && this.formGroup.get(jsonName).errors[typeError]);
      });
      return check;
    }
  }
}
