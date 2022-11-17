import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalConfiguration, ModalDisplayValueInput } from '../../../model/input-model';
import { SharedService } from 'src/app/shared/service/api-shared/shared.service';
import { Sort, Pagination, Row } from 'src/app/shared/table/model/table-model';

@Component({
  selector: 'app-table-modal',
  templateUrl: './table-modal.component.html',
  styleUrls: ['./table-modal.component.css']
})
export class TableModalComponent implements OnInit {
  @Input() modalConfiguration : ModalConfiguration;
  @Output() inputEvent = new EventEmitter<any>();
  status : string = "loading";
  dataList : {[key :string] : any}[];
  constructor(private SharedService : SharedService) { }

  ngOnInit(): void {
    if(this.modalConfiguration.paginationInit != null) 
    {
      this.pagination = JSON.parse(JSON.stringify(this.modalConfiguration.paginationInit)) ;
      this.sort.index = this.modalConfiguration.tableData.findIndex(table => table.jsonName == this.pagination.orderby.split(" ")[0]);
      this.sort.direction = this.pagination.orderby.split(" ")[1];
    }
    this.paginate();
  }

  input(data)
  {
    this.inputEvent.emit(data);
  }
  
  /////////////////////////////service///////////////////////////////////
  getList(queryParam? : string)
  {
    this.status = "loading";
    this.SharedService.getData(this.modalConfiguration.apiUrl, queryParam).subscribe((response)=>
    {
      if(response != null)
      {
          if(response.status == 200)
          {
            this.totalrows = response.body.totalrows;
            this.dataList = response.body.content;
            this.checkRow();
            this.status = "success";
          }
          else if( response.status == 204)
          {
            this.status = "no content";
          }
        }
      else
      {
        this.status = "failed";
      }
    })
  }

  ////////////////table thingy////////////////////////////////////////

  totalrows : number = 0;

  pagination : Pagination = 
  {
    page : 1,
    size : 10,
    orderby : "",
    query : ""
  }

  sort : Sort =
  {
    index : -1,
    direction :  ""
  };

  row : Row  = {
    start :  1,
    end :  10
  }

  sorting(index)
  {
    if(this.sort.index != index || this.sort.direction == "desc")
    {
      this.sort.direction = "asc";
    }
    else
    {
      this.sort.direction = "desc";
    }
    this.sort.index = index;
    this.pagination.orderby = this.modalConfiguration.tableData[index].jsonName + " " + this.sort.direction;
    this.paginate();
  }

  filter(event)
  {
    this.pagination.query = "";
    event.forEach((tes) =>
    {
      if(tes != null)
      {
        if(this.modalConfiguration.tableData[tes.index].search.inputType != "" && tes.value != "")
        {
          this.pagination.query = this.pagination.query + this.modalConfiguration.tableData[tes.index].jsonName + ";" + this.modalConfiguration.tableData[tes.index].search.inputQuery + ";" + tes.value + ";;"
        }
      }
    })
    this.pagination.page = 1;
    this.pageChange();
  }

  checkRow()
  {
    this.row.start = 1 + (10*(this.pagination.page-1));
    this.row.end  = 10 * this.pagination.page;
    if(this.row.end > this.totalrows)
    {
      this.row.end  = this.totalrows;
    }
  }

  pageChange()
  {
    this.checkRow()
    this.paginate();
  }

  paginate()
  {
    const queryParam = 
      "?page=" + this.pagination.page +
      "&orderby=" + this.pagination.orderby +
      "&size=" + this.pagination.size +
      "&query=" + this.pagination.query;
    console.log("queryParam: " + queryParam);
    this.getList(queryParam);
  }
  

}
