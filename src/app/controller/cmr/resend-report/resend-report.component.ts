import { Component, OnInit } from '@angular/core';
import { FormTemplate } from 'src/app/shared/form/model/input-model';
import { SharedService } from 'src/app/shared/service/api-shared/shared.service';

@Component({
  selector: 'app-resend-report',
  templateUrl: './resend-report.component.html',
  styleUrls: ['./resend-report.component.css'],
})
export class ResendReportComponent implements OnInit {
  refreshForm(){
    
  }
formType: String = 'post';
  formTemplate: FormTemplate = {
    title: 'Resend Report',
    backUrl: '',
    inputList: [
      {
        jsonName: 'client_id',
        label: 'Client ID',
        maxlength: 75,
        minlength: 7,
        required: true,
        type: 'text',
        value: '',
      },
      {
        jsonName: 'start_date',
        label: 'Periode Report',
        maxlength: 75,
        required: true,
        type: 'date',
        value: '',
      }
    ],
  };

  constructor(sharedService: SharedService) {}

  ngOnInit(): void {}
}
