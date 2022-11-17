import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl, ValidatorFn, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { InputDetails } from '../../model/input-model';


@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() input : InputDetails;
  @Input() formGroup : FormGroup;
  indented : string;
  colLabel  : string;
  colInput : string;

  constructor() { }

  ngOnInit(): void {
    this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``  
    this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`
    this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`
    console.log("this form group", this.formGroup)
  }


}
