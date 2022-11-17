import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { InputDetails } from '../model/input-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { duplicate } from '../validator/duplicate.validator';
import { SharedService } from '../../service/api-shared/shared.service';
import { InsertValidator } from '../validator/insert-validator';
@Component({
  selector: 'app-form-controller',
  templateUrl: './form-controller.component.html',
  styleUrls: ['./form-controller.component.css']
})
export class FormControllerComponent implements OnInit {
  @Input() input : InputDetails;
  @Input() formGroup : FormGroup;
  @Output() formGroupEvent = new EventEmitter<FormGroup>();

  @Input() isCheckboxVertical: boolean; // FDW

  hide;
  constructor(private SharedService : SharedService) { }

  ngOnInit(): void {
    console.log("test "+typeof this.input.jsonName)
    // this.hide = typeof this.input.jsonName == "string" && !this.formGroup.get(this.input.jsonName).value && this.input.type == "non-input";

    console.log("dmy belajar",this.input.jsonName + " "+this.formGroup.get(this.input.jsonName))


  }
  handleChange(event)
  {
    alert("test")
  }
  onChangeEvent(event)
  {
    console.log("test")
      if(this.input.children[event.formGroup.get(this.input.jsonName).value])
      {
        this.input.children[event.formGroup.get(this.input.jsonName).value].forEach((child) =>
        {
          this.add(child)
        })
      }
      if(this.input.children[event.befValue])
      {
        this.input.children[event.befValue].forEach((child) =>
        {
          this.remove(child);
        })
      }
  }

  remove(input)
  {
    if(typeof input.jsonName == 'string')
    {
      this.formGroup.removeControl(input.jsonName);
    }
    else if(typeof input.jsonName == 'object' || input.type =='radio-children' )
    {
      input.jsonName.forEach(jName =>
        {
          this.formGroup.removeControl(jName);
        })
    }
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
