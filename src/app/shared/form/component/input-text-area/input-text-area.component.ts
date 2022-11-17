import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputDetails } from '../../model/input-model';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent implements OnInit {
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
  }


}
