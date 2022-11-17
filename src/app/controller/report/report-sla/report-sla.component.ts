import { Component, OnInit } from '@angular/core';
import { FormTemplate } from 'src/app/shared/form/model/input-model';
import { ActivatedRoute } from '@angular/router';
import { REPORT_SLA } from 'src/app/data-api/data-master.api';
import { GET_LIST_JENIS_USAHA, GET_ONE_KODE_OFFICER, CHECK_DUPLICATE_KODE_OFFICER, POST_KODE_OFFICER, UPDATE_KODE_OFFICER, GET_LIST_CITY } from 'src/app/data-api/data-master.api';

@Component({
  selector: 'report-sla',
  templateUrl: './report-sla.component.html',
  styleUrls: ['./report-sla.component.css']
})
export class ReportSlaComponent implements OnInit {

  constructor() { }
  
  formTemplate : FormTemplate =
  {
    title : "Laporan SLA",
    backUrl : "report",
    postDataUrl : REPORT_SLA,
    inputList : 
    [
      {
        jsonName : "jenisPermohonan",
        label : "Jenis Permohonan",
        maxlength : 75,
        required: true,
        value :"",
        type : "multiple-checkbox",
        option:
        [
          {key :"Merchant Baru" , value : "Merchant Baru"},
          {key :"Tambah Outlet" , value : "Tambah Outlet"},
          {key :"Tambah Terminal" , value : "Tambah Terminal"},
          {key :"Ubah Fasilitas" , value : "Ubah Fasilitas"},
          {key :"Terminate" , value : "Terminate"},
          {key :"Perubahan Data" , value : "Perubahan Data"},
        ]
      },
     {
        jsonName : "isCreatedDate",
        label : "Periode",
        required: true,
        type : "radio-children",
        option :
        [
          {key : "Created Date", value : true},
          {key : "Approved / Reject Date", value : false}
        ],
        children : 
        {
          true : 
          [
            {
              jsonName : "createdDateFrom",
              label : "Tanggal Mulai",
              maxlength : 75,
              required: true,
              type : "date",
              value :""
            },
            {
              jsonName : "createdDateTo",
              label : "Tanggal Selesai",
              maxlength : 75,
              required: true,
              type : "date",
              value :""
            }
          ],
          false : 
          [
            {
              jsonName : "approvedDateFrom",
              label : "Tanggal Mulai",
              maxlength : 75,
              required: true,
              type : "date",
              value :""
            },
            {
              jsonName : "approvedDateTo",
              label : "Tanggal Selesai",
              maxlength : 75,
              required: true,
              type : "date",
              value :""
            }
          ]
        }
      }
    ]
  }
  ngOnInit(): void {
  }

}
