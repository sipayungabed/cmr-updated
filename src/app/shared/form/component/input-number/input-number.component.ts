import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputDetails } from '../../model/input-model';
@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  @Input() input : InputDetails;
  @Input() formGroup : FormGroup;
  befValue : number;
  indented : string;
  colLabel  : string;
  colInput : string;
  regex;

  constructor() { }

  ngOnInit(): void {
    this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``  
    this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`
    this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`
    this.regex = this.input.isNegative ? `^-?[0-9]{0,${this.input.maxlength}}$` : `^[0-9]{0,${this.input.maxlength}}$`
  }

  filter(event)
  {
    if(!this.formGroup.get(this.input.jsonName).value.toString().match(this.regex)) 
    {
      this.formGroup.get(this.input.jsonName).setValue(this.befValue ? this.befValue : "");
    }
    this.befValue = this.formGroup.get(this.input.jsonName).value as number;
    event.target.value = this.formGroup.get(this.input.jsonName).value;

  }
}
