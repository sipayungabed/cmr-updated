import { Component, OnInit, Input } from '@angular/core';
import { InputFasilitas } from '../../../../model/fasilitas.model';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-fasilitas-fitur-controller',
  templateUrl: './detail-fasilitas-fitur-controller.component.html',
  styleUrls: ['./detail-fasilitas-fitur-controller.component.css']
})
export class DetailFasilitasFiturControllerComponent implements OnInit {
  @Input() child : InputFasilitas;
  value = "";
  constructor(private decimalPipe : DecimalPipe, private datePipe : DatePipe) { }

  ngOnInit(): void {
    switch(this.child.inputType)
    {
      case 'currency':
      this.value = this.child.value.match('^[0-9]*$') ? this.decimalPipe.transform(this.child.value, '1.0-2') : this.child.value
      break;
      case 'hour':
      this.value = this.child.value.match('^[0-9]*$') ? this.child.value.slice(0, 2) + ":" + this.child.value.slice(2, 4) : this.child.value; 
      break;
      case 'text':
      this.value = this.child.value;
      break;
      case 'checkbox':
      this.value =  this.child.name;
      // this.child.value != 'true' && this.child.value != true ? this.child.value :
      break;
      case 'radio':
      this.value = this.child.value != 'true' && this.child.value != true ? this.child.value : this.child.name;
      break;

    }
  }

}
