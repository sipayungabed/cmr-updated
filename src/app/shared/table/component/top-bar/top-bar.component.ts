import { Component, OnInit, Input, Output,  EventEmitter, ViewChild} from '@angular/core';
import { MatOption } from '@angular/material/core';
import { Search, TableData } from '../../model/table-model';


@Component({
  selector: '[app-top-bar]',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() tableData :  TableData[];
  @Input() addButton : boolean;
  @Input() checkNewColumn : boolean;
  @Input() checkbox : boolean;
  @Output() search  = new EventEmitter<Search[]>();
  @Output() checkboxEvent = new EventEmitter<any>();
  searchArray : Search[] = [];
  constructor() { } 

  ngOnInit(): void {}

  searchSelect(event, index) : void
  {
    this.testSearch(event.target.value.toString(), index);
  }

  searchText(event, index) : void
  {
    this.testSearch(event.toString().trim().toLowerCase(), index);
  }

  testSearch(value, index) : void
  { 
    this.searchArray[index] = {index, value} as Search;
    this.search.emit(this.searchArray);
  }

  checkboxChange(event) : void
  {
    this.checkboxEvent.emit(event.target.checked)
  }

  searchMultipleSelection(event, index)
  {
    var options = this.tableData[index].search.options;
    const isAll = this.tableData[index].search.value.some((value) => value == "")
    if(isAll)
    {
      this.tableData[index].search.value = [];
      event.value = [];
      options.forEach(option => {
        this.tableData[index].search.value.push(option.value);
        event.value.push(option.value);
      });
    }
    this.testSearch(event.value, index);
  }


   allSelect(data, index) {
     if(data.search.value.length != data.search.options.length) 
     {
      this.tableData[index].search.value = this.tableData[index].search.options.map(item => item.value)
      this.placeholderMultipleSelect = 'All';
     } 
     else 
     {
      this.tableData[index].search.value = [];
      this.placeholderMultipleSelect = '';
     }
     this.testSearch( this.tableData[index].search.value, index);
   }

   placeholderMultipleSelect = 'All';
   updatePlaceholder(data)
   {
     if(data.search.value.length == data.search.options.length)
     {
      this.placeholderMultipleSelect = 'All';
     }
     else if(data.search.value.length == 0)
     {
      this.placeholderMultipleSelect = '';
     }
     else
     {
      this.placeholderMultipleSelect = data.altValue ? data.altValue[data.search.value[0]] : data.search.value[0]
     }
   }
}
