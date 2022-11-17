import { Component, OnInit, Input } from '@angular/core';
import { DetailContent } from '../../model/details.model';
@Component({
  selector: 'app-details-fasilitas-cicilan-nol-template',
  templateUrl: './details-fasilitas-cicilan-nol-template.component.html',
  styleUrls: ['./details-fasilitas-cicilan-nol-template.component.css']
})
export class DetailsFasilitasCicilanNolTemplateComponent implements OnInit {
  detail : DetailContent =  
  {
      jsonName : ['dateFrom', 'dateTo'],
      label : 'Periode Umum',
      isDate : {'dateFrom' : true, 'dateTo' : true },
      type : 'input-disabled',
      inputConfig : 
      {
        prepend :  {'dateFrom' : '<strong>Tanggal Mulai</strong>', 'dateTo' : '<strong>Tanggal Selesai</strong>'},
        inputType : 'text',
      }
  }

  @Input() data : any;
  @Input() jenisOutlet : string;
  dataFasilitasCil0 : any;
  isCupNotFound;
  constructor() { }

  ngOnInit(): void {
    this.checkDataFasilitasCil0();
  }

  checkDataFasilitasCil0()
  {
    var data = this.data.find((data) => data.name == 'Kredit')
    if(data &&  data.oFacilityFiturs != null)
    {
      data = data.oFacilityFiturs.find((data) => data.name == 'Cicilan 0%')
      this.dataFasilitasCil0 = data;
      if (this.dataFasilitasCil0) {
        this.dataFasilitasCil0.oFacFiturItemLists.forEach(oFacFiturItemList => {
          let cup = oFacFiturItemList.oFacFiturItemListCards.find((oFacFiturItemListCard) => oFacFiturItemListCard.name == 'CUP')
          console.log("cup",cup)
          if (cup == undefined) {
            this.isCupNotFound = true;
          }
        });
      }
      
    }
  }

}
