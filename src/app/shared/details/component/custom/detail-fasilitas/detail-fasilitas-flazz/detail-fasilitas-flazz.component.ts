import { Component, OnInit, Input } from '@angular/core';
import { FiturFasilitasDetails } from '../../../../model/fasilitas.model';

@Component({
  selector: 'app-detail-fasilitas-flazz',
  templateUrl: './detail-fasilitas-flazz.component.html',
  styleUrls: ['./detail-fasilitas-flazz.component.css']
})
export class DetailFasilitasFlazzComponent implements OnInit {
  fiturMenuFlazz : FiturFasilitasDetails[] =
  [
    {
      name  : 'Flazz Top Up Kartu + Update Saldo',
      children1 : 
      [{
        inputType : 'currency',
        name      : 'Minimal Top Up',
      },
      {
        inputType : 'text',
        name      : 'Fee Merchant',
      },
      {
        inputType : 'text',
        name      : 'Fee Nasabah',
      }]
    },
    {
      name  : 'Flazz Top Up Tunai',
      children1 : 
      [{
        inputType : 'text',
        name      : 'Fee Merchant',
      },
      {
        inputType : 'text',
        name      : 'Fee Nasabah',
      }]
    },
    {
      name  : 'Flazz Payment',
    },
    { 
      name  : 'Flazz Perdana + Harga Perdana',
      children1 : 
      [{
        inputType : 'text',
        name      : 'Amount',
        altValue  :  {"NONCABANG" : "Merchant"}
      }]
    },
    { 
      name  : 'Single Amount',
      children1 : 
      [
      {
        id: 38,
        inputType : 'currency',
        name      : 'Nominal',
      },
      {
        id: 39,
        inputType : 'currency',
        name      : 'Nominal',
      },
      {
        id: 40,
        inputType : 'currency',
        name      : 'Nominal',
      },
      {
        id: 41,
        inputType : 'currency',
        name      : 'Nominal',
      },
      {
        id: 42,
        inputType : 'currency',
        name      : 'Nominal',
      },
      ]
    },
    {
      name  : 'Show Expired Date',
    },
    { 
      name  : 'Positive List/Fleet',
      children1 : 
      [{
        inputType : 'checkbox',
        name      : 'Grup Patra',
      }]
    },
  ]
  @Input() dataFlazz;
  @Input() jsonKey;
  length;
  constructor() { }

  ngOnInit(): void {
    if(this.dataFlazz && this.dataFlazz[this.jsonKey.facilityFiturs])
    {
      this.fiturMenuFlazz.forEach(menu => {
        this.dataFlazz[this.jsonKey.facilityFiturs].forEach(fitur =>
        {
          if(fitur.name == menu.name)
          {
            menu.value = true;
            if(menu.children1)
            {
              menu.children1.forEach(itemChild => {
                fitur[this.jsonKey.facFiturItems].forEach(itemFitur => 
                  {
                    //patokan dari namanya
                      if(!itemChild.id && itemFitur.name == itemChild.name && itemFitur.value && itemFitur.value != 'false')
                      {
                        itemChild.value = itemChild.altValue && itemChild.altValue[itemFitur.value] ? itemChild.altValue[itemFitur.value] : itemFitur.value;
                      }
                    //patokan dari namanya
                      else if(itemChild.id && itemChild.id == itemFitur.facilityFiturItemId && itemFitur.value && itemFitur.value != 'false')
                      {
                        itemChild.value = itemChild.altValue && itemChild.altValue[itemFitur.value] ? itemChild.altValue[itemFitur.value] : itemFitur.value;
                      }
                  });
              })
            }
          }
       })
      })
      this.length = this.dataFlazz[this.jsonKey.facilityFiturs] ? this.dataFlazz[this.jsonKey.facilityFiturs].length : '0';
    }

  }

}
