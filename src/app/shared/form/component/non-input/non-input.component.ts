import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputDetails } from '../../model/input-model';
@Component({
  selector: 'app-non-input',
  templateUrl: './non-input.component.html',
  styleUrls: ['./non-input.component.css']
})
export class NonInputComponent implements OnInit {
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
