import { Component, OnChanges, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {  Row, Sort } from '../../model/table-model';
import { TableNonApiModel } from '../../model/table-non-api.model';


@Component({
  selector: 'app-table-non-api',
  templateUrl: './table-non-api.component.html',
  styleUrls: ['./table-non-api.component.css']
})
export class TableNonApiComponent implements OnInit {
  @Input() tableModel : TableNonApiModel;
  @Input() dataList : {[key :string] : any}[];
  @Input() filterList : {[key :string] : any}[];
  @Output() filterEvent = new EventEmitter<any>();
  length;
  newColumn;
  pageSize : number = 10;
  page : number = 1 ;
  row : Row  = {
    start :  1,
    end :  10
  }
  sort : Sort =
  {
    index : -1,
    direction :  ""
  };
  

  ngOnInit(): void 
  {
    console.log(this.dataList);
    console.log(this.tableModel);
    
    
    this.filterList = this.dataList;
    this.filterEvent.emit(this.filterList);
    this.newColumn = this.tableModel.checkbox ?  1 : 0;
    this.length = this.tableModel.checkbox ? this.tableModel.tableData.length + 1 : this.tableModel.tableData.length
    this.paging();
  }

  constructor() { }


  sorting(index)
  {
    if(this.sort.index != index || this.sort.direction == "desc")
    {
      this.sort.direction = "asc";
      this.filterList = this.filterList.sort((a, b) => this.compare(a, b, index))
    }
    else
    {
      this.sort.direction = "desc";
      this.filterList = this.filterList.sort((b, a) =>  this.compare(a, b, index))
    }
    this.sort.index = index;
    this.filterEvent.emit(this.filterList);
  }

  compare(a, b, index)
  {
      var start = a[this.tableModel.tableData[index].jsonName] ? a[this.tableModel.tableData[index].jsonName] : "";
      var end = b[this.tableModel.tableData[index].jsonName] ? b[this.tableModel.tableData[index].jsonName] : "";
      return  start.localeCompare(end);
  }

  filter(event)
  {
    this.filterList = this.dataList;
    this.tableModel.tableData.forEach((data) =>
    {
      if(data != null)
      {
        if(typeof data.search.value == 'string' && data.search.inputType != "" && data.search.value)
        {
          this.filterList = this.filterList.filter(
            (filterData) => filterData[data.jsonName] ?  filterData[data.jsonName].toLowerCase().match(data.search.value.toLowerCase()) : "".match(data.search.value.toLowerCase()))
        }
        else if(typeof data.search.value == 'object' && data.search.inputType != "")
        {
          this.filterList = this.filterList.filter(
            (filterData) => data.search.value.some((selection) => filterData[data.jsonName] ? filterData[data.jsonName].toLowerCase().match(selection.toLowerCase()) :
            "".match(selection.toLowerCase()))
            )
        }
      }
    })
    this.page = 1;
    this.filterEvent.emit(this.filterList);
    this.paging();
  }

  paging()
  {
    this.row.start = 1 + (10*(this.page-1));
    this.row.end  = 10 * this.page;
    if(this.row.end > this.filterList.length)
    {
      this.row.end  = this.filterList.length;
    }
  }

  checkboxChange(event, data)
  {
    data.checked = event.target.checked;
  }

  checkboxEvent(event)
  {
    this.filterList.forEach((data) =>
    {
       data.checked = event;
    })
  }


}
