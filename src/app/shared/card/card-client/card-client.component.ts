import { Component, OnChanges, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CardModel, Sort, Pagination, Row } from '../model/card-model';
import { SharedService } from '../../service/api-shared/shared.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterModel, SearchInfo } from '../model/filter-model';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent implements OnInit {
  @Input() cardModel : CardModel;
  @Input() dataList : {[key :string] : any}[];
  @Input() excelButton : boolean;
  @Output() queryParam = new EventEmitter<string>();
  searchInfo : SearchInfo;
  panelOpenState = false;
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
    if(this.cardModel.paginationInit)
    {
      this.pagination = this.cardModel.paginationInit;
      this.pagination.queryMandatory = this.cardModel.paginationInit.queryMandatory ? this.cardModel.paginationInit.queryMandatory : "";
      this.sort.index = this.cardModel.cardData.findIndex(card => card.jsonName == this.pagination.orderby.split(" ")[0]);
      this.sort.direction = this.pagination.orderby.split(" ")[1];
    }
    this.checkNewColumn();
    this.paginate();
  }
  openScrollableContent(longContent) {
		this.modalService.open(longContent, { scrollable: true });
	}

  constructor(private SharedService : SharedService, private modalService: NgbModal, private sanitizer: DomSanitizer) { }
  closeResult = '';
  getList(queryParam? : string)
  {
    
    
    this.status = "loading";
    this.cancelRequest.next();
    this.SharedService.getData(this.cardModel.getListUrl, queryParam).pipe(takeUntil(this.cancelRequest)).subscribe((response)=>
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
                this.cardModel.totalrows = 30;
                console.log("ini data" + data.content);
                
                // this.cardModel.totalrows = data.total_rows ;
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
    if(typeof this.cardModel.cardData[index].jsonName == 'string')
    {
      this.pagination.orderby = this.cardModel.cardData[index].jsonName + " " + this.sort.direction;
    }
    else
    {
      this.pagination.orderby = this.cardModel.cardData[index].jsonName[0] + " " + this.sort.direction;
    }
    this.paginate();
  }

  search(event){
    this.searchInfo = event;
    this.filter(event);
    console.log(this.searchInfo.category);
  }


  filter(event)
  {
    if(event.length > 0){
      event.forEach(filterCheck => {
        
        console.log(filterCheck.name);
        console.log(filterCheck.value);
        if(this.pagination.query.length <= 0){
          this.pagination.query = filterCheck.name + ";" + "equals:" + filterCheck.value;
        }else{
          this.pagination.query =  this.pagination.query + "||" + ";" + filterCheck.name + ";" + "equals:" + filterCheck.value;
        }
        console.log(this.pagination.query);
      })
    }else{

    }
    // if(this.searchInfo.value != ""){
    //   this.pagination.query = this.pagination.query + this.searchInfo.category + ";" + "equal" + ";" +  this.searchInfo.value.toLowerCase() + ";;"
    // }
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
    if(this.row.end > this.cardModel.totalrows)
    {
      this.row.end  = this.cardModel.totalrows;
    }
  }

  paginate()
  {
    // this.pagination.query = "templateStatus;equals;2"
    const queryParam =
      "?page=" + this.pagination.page +
      "&orderby=" + this.pagination.orderby +
      "&size=" + this.pagination.size +
      "&query=" + this.pagination.query + this.pagination.queryMandatory;
    this.getList(queryParam);
  }

  checkNewColumn()
  {
    this.length = this.newColumn ? this.cardModel.cardData.length+1 :  this.cardModel.cardData.length;
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
  // exportExcel(): void { /* Export current card to Excel */
  //   Swal.fire({
  //     title: 'Do you want to export this current card?',
  //     text: 'This card will downloaded as xlsx file into your system!',
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const excelTitle = 'List ' + this.cardModel.title.charAt(0).toUpperCase() + this.cardModel.title.slice(1) + '.xlsx';

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

  getClick(cardData, data) {
    if (cardData.click == "downloadFile") {
      this.downloadFile(data)
    }
  }

  downloadFile(data) {
    //modal loading
    //save excel
  }

}
