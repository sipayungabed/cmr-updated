import { Component, OnInit } from '@angular/core';
import { GET_CLIENT_CMR } from 'src/app/data-api/data-master.api';
import { CardModel } from 'src/app/shared/card/model/card-model';
import { FormTemplate } from 'src/app/shared/form/model/input-model';
import { SharedService } from 'src/app/shared/service/api-shared/shared.service';
import { TableModel } from 'src/app/shared/table/model/table-model';
import { TableNonApiModel } from 'src/app/shared/table/model/table-non-api.model';

@Component({
  selector: 'app-inquiry-client',
  templateUrl: './inquiry-client.component.html',
  styleUrls: ['./inquiry-client.component.css'],
})
export class InquiryClientComponent implements OnInit {
  
  tableModel: TableModel = {
    removeTopBar: true,
    title: 'Inquiry CMR',
    totalrows: 0,
    
    editButton: true,
    getListUrl: GET_CLIENT_CMR,
    paginationInit: {
      page: 1,
      size: 5,
      orderby: 'clientId',
      query: '',
    },
    tableData: [
      {
        headerName: 'Client ID',
        jsonName: 'client_id',
        search : {
          inputType :  "text",
          inputQuery : "full_like",
      }
      },
      {
        headerName: 'Client Name',
        jsonName: 'client_name',
        search : {
          inputType :  "text",
          inputQuery : "full_like",
      }
      },
      {
        headerName: 'Client Type',
        jsonName: 'client_type',
        search : {
          inputType :  "text",
          inputQuery : "full_like",
      }
      },
      {
        headerName: 'Client Status',
        jsonName: 'client_status_approval',
        search : {
          inputType :  "text",
          inputQuery : "full_like",
      }
      },
      {
        headerName: 'Email 1',
        jsonName: 'client_email1',
      },
      {
        headerName: 'Email 2',
        jsonName: 'client_email2',
      },
      {
        headerName: 'Email 3',
        jsonName: 'client_email3',
      },
      {
        headerName: 'Email 4',
        jsonName: 'client_email4',
      },
      {
        headerName: 'Email 5',
        jsonName: 'client_email5',
      },
      {
        headerName: 'Template Status',
        jsonName: 'template_status_approval',
      },
      {
        headerName: 'File Type',
        jsonName: 'file_type',
      },
    ],
  };

  value: string = '';
  datacard;
  filterList: { [key: string]: any }[];
  // status : string = "failed";
  cardModel: CardModel = {
    removeTopBar: true,
    title: 'Inquiry CMR',
    totalrows: 0,
    editButton: true,
    getListUrl: GET_CLIENT_CMR,
    paginationInit: {
      page: 1,
      size: 5,
      orderby: 'clientId',
      query: '',
    },
    cardData: [
      {
        headerName: 'Client ID',
        jsonName: 'clientId',
      },
      {
        headerName: 'Client Name',
        jsonName: 'clientName',
      },
      {
        headerName: 'Email',
        jsonName: 'clientEmail1',
        
        
      },
      {
        headerName: 'Client Approval',
        jsonName: 'client_email2',
      },
      {
        headerName: 'Template Approval',
        jsonName: 'client_email3',
      },
      {
        headerName: 'File Type',
        jsonName: 'client_email4',
      }
    ],
  };

  constructor(private SharedService: SharedService) {}

  ngOnInit(): void {}
}
