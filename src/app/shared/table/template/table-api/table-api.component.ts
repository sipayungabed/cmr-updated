import { Component, OnChanges, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TableModel, Sort, Pagination, Row } from '../../model/table-model';
import { SharedService } from '../../../service/api-shared/shared.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-table-api',
  templateUrl: './table-api.component.html',
  styleUrls: ['./table-api.component.css']
})
export class TableApiComponent implements OnInit {
  @Input() tableModel : TableModel;
  @Output() queryParam = new EventEmitter<string>();
  @Input() dataList : {[key :string] : any}[];
  @Input() excelButton : boolean;

  cancelRequest : Subject<void> = new Subject<void>();
  status : string;
  newColumn;
  length;
  imageModal = null;
  isImageLoading: boolean;
  imageResponse: any;
  data : any;
  imageToShow: any;
  dataModal: any;
  pagination : Pagination =
  {
    page : 1,
    size : 10,
    orderby : "",
    query : "",
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

  ngOnInit(): void
  {
    if(this.tableModel.paginationInit)
    {
      this.pagination = this.tableModel.paginationInit;
      this.pagination.queryMandatory = this.tableModel.paginationInit.queryMandatory ? this.tableModel.paginationInit.queryMandatory : "";
      this.sort.index = this.tableModel.tableData.findIndex(table => table.jsonName == this.pagination.orderby.split(" ")[0]);
      this.sort.direction = this.pagination.orderby.split(" ")[1];
    }
    console.log("abi" + this.pagination);
    
    this.checkNewColumn();
    this.paginate();
  }

  constructor(private SharedService : SharedService, private modalService: NgbModal, private sanitizer: DomSanitizer) { }

  getList(queryParam? : string)
  {
    
    
    this.status = "loading";
    this.cancelRequest.next();
    this.SharedService.getData(this.tableModel.getListUrl, queryParam).pipe(takeUntil(this.cancelRequest)).subscribe((response)=>
    {
      
      console.log('response', response)
      if(response != null)
      {
        
        if(response.body == null)
        {
          
          this.status = "no content";
        }
        else
        {
          
            if(response.status == 200 )
              {
                
                this.status = "success";
                var data = response.body;
                this.tableModel.totalrows = 30;
                // this.tableModel.totalrows = data.total_rows ;
                this.dataList = data.content;
                this.paging();
              }
              else if( (response.status == 200 && response.body.info.code == 204) || (response.status == 200 && response.body.info.status == 204) || response.status == 204)
              {
                this.status = "no content";
              }
         
        }

      }
      else
      {
        this.status = "failed";
      }
    })
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
    if(typeof this.tableModel.tableData[index].jsonName == 'string')
    {
      this.pagination.orderby = this.tableModel.tableData[index].jsonName + " " + this.sort.direction;
    }
    else
    {
      this.pagination.orderby = this.tableModel.tableData[index].jsonName[0] + " " + this.sort.direction;
    }
    this.paginate();
  }

  filter(event)
  {
    this.pagination.query = "";
    this.tableModel.tableData.forEach((data) =>
    {
      if(data != null && data.search != null)
      {
        if(data.search.inputType != "" && data.search.value)
        {
          const trimmedSearchDataValue = data.search.value.trim(); // FDW => 1 Dec 2021 => trim search data value
          if(typeof data.jsonName == 'string')
          {
            this.pagination.query = this.pagination.query + data.jsonName + ";" + data.search.inputQuery + ";" +  trimmedSearchDataValue + ";;"
          }
          else
          {
            data.jsonName.forEach((jsonName, index) => { //masih harus diperbaiki (udah bisa search tapi kalo ditumpuk dengan yg lain, masih gagal) --> sudah oke
              if (index == data.jsonName.length -1) {
                this.pagination.query = this.pagination.query + jsonName + ";" + data.search.inputQuery + ";" + trimmedSearchDataValue
              } else {
                this.pagination.query = this.pagination.query + jsonName + ";" + data.search.inputQuery + ";" + trimmedSearchDataValue + "||"
              }
            });
          }
        }
      }
    })
    if (this.pagination.query.slice(-2) == ";;" && !this.pagination.queryMandatory) {
      this.pagination.query = this.pagination.query.slice(0, -2)
    }
    this.pagination.page = 1;
    this.paginate();
  }

  paging()
  {
    this.row.start = 1 + (10*(this.pagination.page-1));
    this.row.end  = 10 * this.pagination.page;
    if(this.row.end > this.tableModel.totalrows)
    {
      this.row.end  = this.tableModel.totalrows;
    }
  }

  paginate()
  {
    const queryParam =
      "?page=" + this.pagination.page +
      "&orderby=" + this.pagination.orderby +
      "&size=" + this.pagination.size +
      "&query=" + this.pagination.query + this.pagination.queryMandatory;
    this.getList(queryParam);
  }

  checkNewColumn()
  {
    this.newColumn = this.tableModel.addButton || this.tableModel.editButton ? 1 : 0;
    this.length = this.newColumn ? this.tableModel.tableData.length+1 :  this.tableModel.tableData.length;
  }

  openModal(content, data, pathParam?)
  {
    // FDW - 02072022
    this.dataModal = $.extend( {}, data );
    if (pathParam) { this.dataModal.getListUrl = data.getListUrl + pathParam; }

    this.imageModal = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl', windowClass: 'modal-document'});
    // if (data.mid) { this.getImage(data.mid); }
  }

  // getImage(mid) {
  //   this.isImageLoading = true;
  //   this.SharedService.getDataImage(GET_QRIS_IMAGE, mid).subscribe((response) =>
  //   {
  //     if(response)
  //     {
  //       let url = URL.createObjectURL(response);
  //       this.imageResponse = response;
  //       this.imageToShow = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  //       this.isImageLoading = false;
  //     }
  //     else
  //     {
  //       this.imageToShow = null;
  //       this.isImageLoading = false;
  //     }
  //   })
  // }

  downloadImage(data) {
    var date = new Date();
    var currentYear = date.getFullYear();
    var currentMonth = (date.getMonth()+1).toString();
    currentMonth = ("0" + currentMonth).slice(-2);
    var currentDate = ("0" + date.getDate()).slice(-2);
    var currentHours = ("0" + date.getHours()).slice(-2);
    var currentMinutes = ("0" + date.getMinutes()).slice(-2);

    var blob = new Blob([this.imageResponse], {type: "data:image/png;base64"});
    var filename = data.mid + "_" + data.nmid + "_QR_IMAGE_" + currentYear + currentMonth + currentDate + "_" + currentHours + currentMinutes +".png"
    FileSaver.saveAs(blob, filename);
  }

  closeModal()
  {
    this.imageModal.close();
  }

  /* FDW => 19-NOV-2021 => add Export/Import Button */
  // exportExcel(): void { /* Export current table to Excel */
  //   Swal.fire({
  //     title: 'Do you want to export this current table?',
  //     text: 'This table will downloaded as xlsx file into your system!',
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const excelTitle = 'List ' + this.tableModel.title.charAt(0).toUpperCase() + this.tableModel.title.slice(1) + '.xlsx';

  //         /* convert json to excel */
  //         const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataList);

  //         /* generate workbook and add the worksheet */
  //         const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //         /* download file */
  //         XLSX.writeFile(wb, excelTitle);
  //         Swal.fire(
  //           'Success!',
  //           'File downloaded!',
  //           'success'
  //         );
  //       } catch (e) {
  //         Swal.fire(
  //           'Oops!',
  //           'Something went wrong!',
  //           'error'
  //         );
  //       }
  //     }
  //   });
  // }

  getClick(tableData, data) {
    if (tableData.click == "downloadFile") {
      this.downloadFile(data)
    }
  }

  downloadFile(data) {
    //modal loading
    //save excel
  }
}
