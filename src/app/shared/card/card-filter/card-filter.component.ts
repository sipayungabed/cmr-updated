import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CheckFilterModel,
  FilterModel,
  OptionModel,
  RadioFilterModel,
  SearchInfo,
} from '../model/filter-model';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.css'],
})
export class CardFilterComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<SearchInfo>();
  @Output() filterEvent = new EventEmitter<Array<OptionModel>>();
  selectedFilters = new Array<OptionModel>();
  searchInfo: SearchInfo = {
    category: 'Nama',
    value: '',
  };
  radioFilterModel: RadioFilterModel[] = [
    {
      jsonName: 'clientType',
      name: 'Tipe Client',
      groupId: 1,
      optionName: [
        {
          value: 'M',
          name: 'Merchant',
          id: 1,
          checked : false
        },
        {
          value: 'G',
          name: 'Group',
          id: 2,
          checked : false
        },
        {
          value: 'C',
          name: 'Company',
          id: 3,
          checked : false
        },
      ],
    },
    {
      jsonName: 'clientStatus',
      name: 'Status Client',
      groupId:2,
      optionName: [
        {
          value: '1',
          name: 'Approve',
          id: 4,
          checked : false
        },
        {
          value: 'Pending',
          name: 'Pending',
          id: 5,
          checked : false
        },
      ],
    },
    {
      jsonName: 'templateStatus',
      name: 'Status Template',
      groupId:3,
      optionName: [
        {
          value: 'Approve',
          name: 'Approve',
          id: 6,
          checked : false
        },
        {
          value: 'Pending',
          name: 'Pending',
          id: 7,
          checked : false
        },
      ],
    },
    {
      jsonName: 'fileType',
      name: 'Tipe File',
      groupId:4,
      optionName: [
        {
          value: 'xls',
          name: 'xls',
          id: 8,
          checked : false
        },
        {
          value: 'txt',
          name: 'txt',
          id: 9,
          checked : false
        },
        {
          value: 'csv',
          name: 'csv',
          id: 10,
          checked : false
        },
      ],
    },
  ];

  filterOpened = false;
  placeholder: String = 'Cari berdasarkan ' + this.searchInfo.category;

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
  }

  toogleFilter() {
    if (this.filterOpened) {
      this.filterOpened = false;
    } else {
      this.filterOpened = true;
    }
  }

  onCheckboxChange(event: any, name: string, id : number) {
    const selectedFilter: OptionModel = {
      name: name,
      value: event.source.value,
      id : id,
      checked : event.checked
    };
    if (event.checked) {
      this.selectedFilters.push(selectedFilter);
    } else {
      this.selectedFilters = this.selectedFilters.filter(item => item.id !== id);
      
    }
  }

  onRadioChange(event: any, name: string, id : number) {
    console.log(event.value);
    
    
    const selectedFilter: OptionModel = {
      name: name,
      value: event.source.value,
      id : id,
      checked : event.checked
    };
    if (this.selectedFilters.filter(item => item.id === id) === null) {
      this.selectedFilters.push(selectedFilter);
    } else {
      this.selectedFilters = this.selectedFilters.filter(item => item.id !== id);
      this.selectedFilters.push(selectedFilter);
      
    }
    console.log(this.selectedFilters);
  }

  onChanges() {
    this.placeholder = 'Cari berdasarkan ' + this.searchInfo.category;
  }
  clickedOutside(): void {
    this.filterOpened = false;
  }

  useFilter() {
    this.filterEvent.emit(this.selectedFilters);
    this.clickedOutside();
  }

  resetFilter () {
    this.searchInfo.category = 'Nama';
    this.searchInfo.value = '';
    this.radioFilterModel.forEach(t=> (t.value = ""));
    // this.checkFilterModel.forEach(t => (t.optionName.forEach( o => o.checked = false) ));
    this.selectedFilters = [];
    this.clickedOutside();
  }

  search() {
    this.searchEvent.emit(this.searchInfo);
  }

  ngOnInit(): void {}
}
