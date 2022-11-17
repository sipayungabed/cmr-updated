import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl,FormArray,AbstractControl, ValidatorFn, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { InputDetails } from '../../model/input-model';
@Component({
  selector: 'app-multiple-checkbox',
  templateUrl: './multiple-checkbox.component.html',
  styleUrls: ['./multiple-checkbox.component.css']
})
export class MultipleCheckboxComponent implements OnInit {
  @Input() input : InputDetails;
  @Input() formGroup : FormGroup;

  @Input() isCheckboxVertical: boolean; // FDW

  formArray : any;
  indented : string;
  colLabel  : string;
  colInput : string;
  constructor() {}
  ngOnInit(): void {
    this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``
    this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`
    this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`
    this.formArray = [];
  }
  onChange(isChecked: boolean,value) {

    console.log("value",value)
    if(isChecked) {
      // emailFormArray.push(new FormControl(email));
      this.formArray.push(value);
    } else {
      let index = this.formArray.indexOf(value)
      this.formArray.splice(index,1);
    }
    this.formGroup.removeControl('jenisPermohonan');
    this.formGroup.addControl('jenisPermohonan', new FormControl(this.formArray.toString()));
    // this.formGroup.get(this.input.jsonName).setValue(this.formArray.toString());



  }

}
