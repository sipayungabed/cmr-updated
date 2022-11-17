import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.css']
})
export class ReportHomeComponent implements OnInit {

  reportList : 
  {
    name: string,
    link: string,
    description : string
  }[] = 
  [
    {
      name: "CMR INQUIRY CLIENT",
      link: "cmr/inquiry-client",
      description : "Inquiry CLient CMR"
    },
    {
      name: "CMR RESEND REPORT",
      link: "cmr/resend-report",
      description : "Resend Report Merchant"
    }


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
