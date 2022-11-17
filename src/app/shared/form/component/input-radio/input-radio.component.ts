import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';
import { InputDetails } from '../../model/input-model';
import { SharedService } from '../../../service/api-shared/shared.service';
import { InsertValidator } from '../../validator/insert-validator';
@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements OnInit {
  @Input() input : InputDetails;
  @Input() formGroup : FormGroup;
  @Output() onChangeEvent = new EventEmitter<any>();
  indented : string;
  colLabel  : string;
  colInput : string;

  befValue;

  constructor(private SharedService : SharedService) { }

  ngOnInit(): void {
    this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``
    this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`
    this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`
  }

  changeEvent(event)
  {
    // console.log(this.formGroup.get(this.input.jsonName).value)
    var formGroup = this.formGroup;
    var befValue = this.befValue;
    this.onChangeEvent.emit({formGroup, befValue});
    this.befValue = this.formGroup.get(this.input.jsonName).value;

  }
  add(input)
  {
    if(typeof input.jsonName == 'string')
    {
      this.formGroup.addControl(input.jsonName, new InsertValidator(input, this.SharedService) as FormControl);
    }
    else if(typeof input.jsonName == 'object' || input.type =='radio-children')
    {
      input.jsonName.forEach(jName =>
        {
          this.formGroup.addControl(jName , new InsertValidator(input, this.SharedService, jName) as FormControl);
        })
    }
  }
}
