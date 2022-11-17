import { Component, OnInit, Input } from '@angular/core';
import { DetailContent } from '../../../model/details.model';
@Component({
  selector: 'app-detail-address-two',
  templateUrl: './detail-address-two.component.html',
  styleUrls: ['./detail-address-two.component.css']
})
export class DetailAddressTwoComponent implements OnInit {
  @Input() detail : DetailContent;
  @Input() data : any;
  keyList = [
    'kelurahan',
    'kecamatan',
    'kota',
    'provinsi',
    'kodePos',
  ];
  defaultJsonName : {[key : string] : string} =
  {
    kelurahan : 'villageName',
    kecamatan : 'subdistrictName',
    kota : 'regencyName',
    provinsi : 'provinceName',
    kodePos : 'postalCode'
  }
  value = 
  {
    kelurahan : null,
    kecamatan : null,
    kota : null,
    provinsi : null,
    kodePos : null
  } 
  indented : string;

  constructor() { }

  ngOnInit(): void {
    this.indented = this.detail.indented ? `col-md-${this.detail.indented}` : `col-md-3`  
    this.keyList.forEach((key) =>
    {
      this.checkAddress(key);
    })
  }

  checkAddress(address : string)
  {
    if(this.detail.addressJsonName && this.detail.addressJsonName[address])
    {
      this.value[address] = this.data[this.detail.addressJsonName[address]] ? this.data[this.detail.addressJsonName[address]] : '-'
    }
    else
    {
      this.value[address] = this.data[this.defaultJsonName[address]] ? this.data[this.defaultJsonName[address]] : '-'
    }
  }
}
