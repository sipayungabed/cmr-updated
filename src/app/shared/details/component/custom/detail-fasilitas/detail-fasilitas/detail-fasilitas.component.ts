import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-fasilitas',
  templateUrl: './detail-fasilitas.component.html',
  styleUrls: ['./detail-fasilitas.component.css']
})
export class DetailFasilitasComponent implements OnInit {
  @Input() category   : string;
  @Input() dataList : any;
  fasilitasList  : any    =
  [
    {
      name : 'Debit',
    },
    {
      name : 'Kredit',
    },
    {
      name : 'Flazz',
    },
    {
      name : 'QRIS',
    },
  ]

  menuList          : any = 
  [
    {
      name : 'Debit',
    },
    {
      name : 'Kredit',
    },
    {
      name : 'Flazz',
    },
    {
      name : 'Lainnya',
      show : true
    },
  ];

  jsonKey : any = 
  {
    outlet :
    {
      facilities          : 'oFacilities',
      facilityCards       : 'oFacilityCards',
      facilityItems       : 'oFacilityItems',
      facilityFiturs      : 'oFacilityFiturs',
      facFiturItems       : 'oFacFiturItems',
      facFiturItemLists   : 'oFacFiturItemLists',
    },
    outletDevices :
    {
      facilities          : 'odFacilities',
      facilityCards       : 'odFacilityCards',
      facilityItems       : 'odFacilityItems',
      facilityFiturs      : 'odFacilityFiturs',
      facFiturItems       : 'odFacFiturItems',
      facFiturItemLists   : 'odFacFiturItemLists',
    }
  };

  activeMenu        : string;
  dataFasilitas     : {[key : string] : any} = {};



  constructor() { }

  ngOnInit(): void {
    this.insertFasilitas();
  }

  insertFasilitas()
  {
    if(this.category != 'outletQris')
    {
      this.dataList.forEach(data => {
        this.dataFasilitas[data.name] = data;
        this.fasilitasList.forEach(fasilitas =>
        {
          if(data.name == fasilitas.name)
          {
            fasilitas.show = true;
          }
        });
        this.menuList.forEach(menu =>
          {
            if(data.name == menu.name)
            {
              menu.show = true;
            }
          });
      })
    }
  }

}
