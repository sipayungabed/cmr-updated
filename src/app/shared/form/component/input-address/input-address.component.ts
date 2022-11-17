import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputDetails, ModalConfiguration } from '../../model/input-model';
import { GET_LIST_POSTAL } from 'src/app/data-api/data-master.api';
@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.css']
})
export class InputAddressComponent implements OnInit {
  @Input() input : InputDetails;
  @Input() formGroup : FormGroup;
  modalConfiguration : ModalConfiguration =
  {
    displayKey : "village_name",
    displayKey2 : "postal_code",
    apiUrl : GET_LIST_POSTAL,
    paginationInit : 
    {
      page : 1,
      size : 10,
      orderby : "postal_code asc",
      query : ""
    },
    tableData : [
    {
      headerName : "Kode Pos",
      jsonName   : "postal_code", //sesuai json group
      search : {
          inputType :  "text",
          inputQuery : "full_like",
      }
    },
    {
      headerName : "Kelurahan",
      jsonName   : "village_name", //sesuai json group
      search : {
          inputType :  "text",
          inputQuery : "full_like",
      }
    },
    {
      headerName : "Kecamatan",
      jsonName   : "subdistrict_name", //sesuai json group
      search : {
          inputType :  "text",
          inputQuery : "full_like",
      }
    },
    {
      headerName : "Kota / Kabupaten",
      jsonName   : "regency_name", //sesuai json group
      search : {
          inputType :  "text",
          inputQuery : "full_like",
      }
    },
    {
      headerName : "Propinsi",
      jsonName   : "province_name", //sesuai json group
      search : {
          inputType :  "text",
          inputQuery : "full_like",
      }
    }]
  };
  
  indented : string;
  colLabel  : string;
  colInput : string;

  constructor() { }

  ngOnInit(): void {
    this.indented = this.input.indented ? `col-md-${this.input.indented}` : ``  
    this.colLabel = this.input.colLabel ? `col-md-${this.input.colLabel}` : `col-md-3`
    this.colInput = this.input.colInput ? `col-md-${this.input.colInput}` : `col-md-6`

    var inputDetails = this.input;
    this.modalConfiguration.displayInit = this.formGroup.get("village_name").value;
    this.modalConfiguration.displayInit2 = this.formGroup.get("postal_code").value;
    this.modalConfiguration.tableTitle = "Kode Pos";
    this.modalConfiguration.displayLabel = "Kelurahan";
    this.modalConfiguration.displayLabel2 = "Kode Pos";
    inputDetails.modalConfiguration = this.modalConfiguration;
    this.input = inputDetails;
    console.log(this.input);
  }
  valid(input)
  {
    if(typeof input.jsonName != "object")
    {
      return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).valid ;
    }
    else 
    {
      var check : boolean = true;
      input.jsonName.forEach((jsonName) => {
        check = check && this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).valid ;
      });
      return check;
    }
  }

  invalid(input)
  {
    if(typeof input.jsonName != "object")
    {
      return this.formGroup.get(input.jsonName).touched && this.formGroup.get(input.jsonName).invalid ;
    }
    else 
    {
      var check : boolean = false;
      input.jsonName.forEach((jsonName) => {
        check = check || (this.formGroup.get(jsonName).touched && this.formGroup.get(jsonName).invalid) ;
      });
      return check;
    }
  }
}
