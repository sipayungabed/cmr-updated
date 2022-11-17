import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormTemplate, InputDetails } from '../../model/input-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ModalConfirmationComponent } from '../../../modal/modal-confirmation.component';
import { SharedService } from '../../../service/api-shared/shared.service';
import { ModalControllerService } from '../../../modal/modal-controller.service';
import { duplicate } from '../../validator/duplicate.validator';
import { InsertValidator } from '../../validator/insert-validator';
import { CookieService } from 'ngx-cookie-service';
import { GET_CLIENT_CMR, POST_RESEND_CMR } from 'src/app/data-api/data-master.api';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent implements OnChanges {
  @Input() formTemplate: FormTemplate;
  @Input() formType;
  @Input() id;
  @Output() dataTable = new EventEmitter<object>();
  @Input() isCheckboxVertical: boolean; // FDW

  formGroup: FormGroup;
  status: string = 'loading';
  constructor(
    private SharedService: SharedService,
    private ModalController: ModalControllerService,
    private modalService: NgbModal,
    private cookieService: CookieService,
    private Router: Router
  ) {}

  ngOnChanges(): void {
    if(this.formTemplate != null && this.formGroup == null)
    {
      if(this.id != null && this.id != 0)
      {
        this.formTemplate.getDataUrl = this.formTemplate.getDataUrl + this.id + ";;";
        this.formTemplate.putDataUrl = this.formTemplate.putDataUrl + this.id;
      }
      else
      {
        this.status = 'success';
      }
      this.formTemplateInit();
    }
  }
  

  getOne() {
    this.SharedService.getData(this.formTemplate.getOneUrl).subscribe(
      (response) => {
        if (response && response.status == '200') {
          this.status = 'success';
          var data = response.body.content[0];
          this.formTemplate.inputList = this.formTemplate.inputList.concat(
            this.editDataMaster
          );

          this.formTemplate.inputList.forEach((formData) => {
            this.insertValueGetOne(formData, data);
            if (formData.children && formData.children[formData.value]) {
              formData.children[formData.value].forEach((child) => {
                this.insertValueGetOne(child, data);
              });
            }
          });
          this.formTemplateInit();
        } else {
          this.status = 'failed';
        }
      }
    );
  }

  formTemplateInit() {
    var group: any = {};
    this.formTemplate.inputList.forEach((input) => {
      this.addToGroup(group, input);
      if (input.children && input.children[input.value]) {
        input.children[input.value].forEach((child) => {
          this.addToGroup(group, child);
        });
      }
    });

    this.formGroup = new FormGroup(group);
    console.log('formgroup value', this.formGroup.value);
  }

  addToGroup(group, input) {
    if (typeof input.jsonName != 'object') {
      group[input.jsonName] = new InsertValidator(input, this.SharedService);
    } else {
      input.jsonName.forEach((jName) => {
        group[jName] = new InsertValidator(input, this.SharedService, jName);
      });
    }
  }

  cancel() {
    if (this.formGroup.dirty) {
      const alert = this.modalService.open(ModalConfirmationComponent);
      alert.componentInstance.content =
        'Apakah anda yakin tidak ingin menyimpan perubahan?';
      alert.result.then(
        (result) => {
          result == 'Ok'
            ? this.Router.navigate([this.formTemplate.backUrl])
            : null;
        },
        () => {}
      );
    } else {
      this.Router.navigate([this.formTemplate.backUrl]);
    }
  }

  //Edit Panel
  editDataMaster: InputDetails[] = [
    {
      jsonName: 'isactive',
      required: true,
      value: 'false',
      label: 'Status',
      type: 'radio',
      option: [
        {
          key: 'Active',
          value: 'true',
        },
        {
          key: 'Inactive',
          value: 'false',
        },
      ],
    },
    {
      jsonName: 'createddate',
      value: '',
      label: 'Created Date',
      type: 'non-input',
    },
    {
      jsonName: 'createdby',
      value: '',
      label: 'Created By',
      type: 'non-input',
    },
    {
      jsonName: 'modifieddate',
      value: '',
      label: 'Modified Date',
      type: 'non-input',
    },
    {
      jsonName: 'modifiedby',
      value: '',
      label: 'Modified By',
      type: 'non-input',
    },
  ];

  // getOne()
  // {
  //   this.SharedService.getData(this.formTemplate.getOneUrl).subscribe((response) =>
  //   {
  //     if(response && (response.status == '200'))
  //     {
  //       this.status = 'success';
  //       var data = response.body.content[0];
  //       this.formTemplate.inputList = this.formTemplate.inputList.concat(this.editDataMaster);

  //       this.formTemplate.inputList.forEach((formData) =>
  //       {
  //         this.insertValueGetOne(formData, data);
  //         if(formData.children && formData.children[formData.value])
  //         {
  //           formData.children[formData.value].forEach((child) =>
  //           {
  //             this.insertValueGetOne(child, data);
  //           })
  //         }
  //       })
  //       this.formTemplateInit();
  //     }
  //     else
  //     {
  //       this.status = 'failed';
  //     }
  //   });
  // }

  insertValueGetOne(formData, data) {
    if (typeof formData.jsonName == 'string') {
      data[formData.jsonName] != null
        ? (formData.value = data[formData.jsonName].toString())
        : (formData.value = data[formData.jsonName]);
    } else if (typeof formData.jsonName == 'object') {
      var value: { [key: string]: any } = {};
      formData.jsonName.forEach((jsonName) => {
        value[jsonName] = data[jsonName];
      });
      formData.value = value;
    }
    if (formData.modalConfiguration) {
      formData.modalConfiguration.displayInit =
        data[formData.modalConfiguration.displayKey];
      formData.modalConfiguration.displayInit2
        ? (formData.modalConfiguration.displayInit2 =
            data[formData.modalConfiguration.displayKey2])
        : null;
    }
  }
  //
  
  //Save Data Panel
  save() {
    // this.ModalController.openLoading("Sedang Menyimpan Data...");
    console.log("aaaaaaasasasas" + this.formType + "abed");
    
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (this.formType == "get") {
      this.getData();
    } else if (this.formType == "post") {
      this.ModalController.openLoading("Sedang Mengirim Request Resend...");
      this.postData();
    }
    // if(this.formType == "edit")
    // {
    //   this.updateData(userInfo ? userInfo.userData.userName : null);
    // }
    // else
    // {
    //   this.postData(userInfo ? userInfo.userData.userName : null);
    // }
  }

  postData() {
    console.log("post");
    
    this.SharedService.postData(
      POST_RESEND_CMR,
      this.formGroup.value
    ).subscribe((response) => {
      this.responseController(response);
      if (response && response.status == '200') {
        // this.ModalController.closeAlert();
        
      } else {
        this.status = 'failed';
      }
    });
  }

  queryParamGetMerchant() {
    if (this.formGroup.get('value').value == null) {
      return;
    }
    if (this.formGroup.get('Cari Berdasarkan').value == null) {
      return;
    }
    return (
      '?' +
      this.formGroup.get('Cari Berdasarkan').value +
      '=' +
      this.formGroup.get('value').value
    );
  }

  getData() {
    console.log('dfghjk');

    console.log(this.formGroup.get('value').value);

    this.SharedService.getData(
      GET_CLIENT_CMR,
      this.queryParamGetMerchant()
    ).subscribe((response) => {
      if (response && response.status == '200') {
        console.log('bbbbbb' + response.body);
        this.dataTable.emit(Object.assign({}, response));
        this.status = 'success';
        console.log('AKWOKAWPOEAHNnw');
        // this.ModalController.closeAlert();
        // this.responseController(response);
      } else {
        this.status = 'failed';
      }
    });
  }

  updateData(user) {
    this.formGroup.get('modifiedby').setValue(user);
    this.formGroup.addControl('modifiedbyname', new FormControl(user));
    this.formGroup.addControl('modifiedterminal', new FormControl(user));
    console.log(this.formGroup.value);
    this.SharedService.putData(
      this.formTemplate.putDataUrl,
      this.formGroup.value
    ).subscribe((response) => {
      this.responseController(response);
    });
  }

  responseController(response) {
    this.ModalController.closeLoading();
    console.log('response', response);
    console.log("gagal");
    

    if (response != null) {
      console.log('response', response);
      if (response.status == 200 || response.status == 201) {
        this.ModalController.openAlert(
          'Laporan sedang diproses',
          this.formTemplate.backUrl
        );
        }
    } else {
      this.ModalController.openAlert(
        'Data tidak dapat dimasukan kedalam server'
      );
    }
  }
  //
}
