import { Component, OnInit } from '@angular/core';
import { FormTemplate } from 'src/app/shared/form/model/input-model';
import { ActivatedRoute } from '@angular/router';
import { REPORT_SLA } from 'src/app/data-api/data-master.api';

@Component({
  selector: 'app-report-perekrutan-merchant',
  templateUrl: './report-perekrutan-merchant.component.html',
  styleUrls: ['./report-perekrutan-merchant.component.css']
})
export class ReportPerekrutanMerchantComponent implements OnInit {

  formTemplate : FormTemplate =
  {
    title : "Laporan Perekrutan Merchant",
    backUrl : "report",
    postDataUrl : REPORT_SLA,
    inputList : 
    [
      {
        jsonName : "name",
        required : true,
        label : "Brand",
        type : "text",
        maxlength : 25,
      }
    ]
  }
  constructor(private ActivedRoute : ActivatedRoute) { }

  ngOnInit(): void {

  }

}
