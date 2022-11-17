import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputDetails } from '../../model/input-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.css']
})
export class InputModalComponent implements OnInit {
  @Input() input : InputDetails;
  @Input() formGroup : FormGroup;
  displayData2 : string;
  displayData : string;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    if(this.input.value != null && this.input.value != 0)
    {
      this.displayData = this.input.modalConfiguration.displayInit;
      if(this.input.modalConfiguration.displayKey2 &&  this.input.modalConfiguration.displayInit2)
      {
        this.displayData2 =  this.input.modalConfiguration.displayInit2 
      }
    }
  }
  

  inputEvent(event)
  {
    //buat display data

    if(this.input.modalConfiguration.valuesKey)
    {
      const displayKey = this.input.modalConfiguration.valuesKey[this.input.modalConfiguration.displayKey] ? this.input.modalConfiguration.valuesKey[this.input.modalConfiguration.displayKey] : this.input.modalConfiguration.displayKey;
      this.displayData = event[displayKey];
      if(this.input.modalConfiguration.displayKey2)
      {
        const displayKey2 = this.input.modalConfiguration.valuesKey[this.input.modalConfiguration.displayKey2] ? this.input.modalConfiguration.valuesKey[this.input.modalConfiguration.displayKey2] : this.input.modalConfiguration.displayKey2;
        this.displayData2 = event[displayKey2];
      }
    }
    else
    {
      const displayKey = this.input.modalConfiguration.displayKey;
      this.displayData = event[displayKey];
      if(this.input.modalConfiguration.displayKey2)
      {
        const displayKey2 = this.input.modalConfiguration.displayKey2;
        this.displayData2 = event[displayKey2];
      }
    }

    //buat nge set value setelah di klik
    this.input.jsonName.forEach(jsonName => {
      if(this.input.modalConfiguration.valuesKey && this.input.modalConfiguration.valuesKey[jsonName])
      {
        this.formGroup.get(jsonName).setValue(event[this.input.modalConfiguration.valuesKey[jsonName]]);
      }
      else
      {
        this.formGroup.get(jsonName).setValue(event[jsonName]);
      }  
      this.formGroup.get(jsonName).markAsTouched();
      this.formGroup.get(jsonName).markAsDirty();
    });
    console.log(this.formGroup.value);
  }

  clear()
  {
    this.input.jsonName.forEach(jsonName => {
      this.formGroup.get(jsonName).setValue('');
      this.formGroup.get(jsonName).markAsTouched();
      this.formGroup.get(jsonName).markAsDirty();
    });
    this.displayData = "";
    this.displayData2 = "";
  }

  valid(input)
  {
    var check : boolean = true;
    input.jsonName.forEach((jsonName) => {
      check = check && this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).valid ;
    });
    return check;
  }

  invalid(input)
  {
    var check : boolean = false;
    input.jsonName.forEach((jsonName) => {
      check = check || (this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).invalid) ;
    });
    return check;
  }

  //////////////////////////////Modal////////////////////////////////////
  open(content) 
  { 
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',  size: 'lg'}).result.then((tes) => 
    {}).catch((res) => { 
      this.input.jsonName.forEach((jsonName) => {
        this.formGroup.get(jsonName).markAsTouched();
      });
    });;
  }
}
