import { Component, OnInit, Input } from '@angular/core';
import { TableMdrDetails, FiturFasilitasDetails } from '../../../../model/fasilitas.model';

@Component({
  selector: 'app-detail-fasilitas-debit',
  templateUrl: './detail-fasilitas-debit.component.html',
  styleUrls: ['./detail-fasilitas-debit.component.css']
})
export class DetailFasilitasDebitComponent implements OnInit {
  debetMDR : {[key : string] : TableMdrDetails[]} =
  {
    onUs : 
    [
      {
        label : 'On Us',
        name  : 'BCA'
      },
    ],
    offUs : 
    [
      {
        label : 'Debit Domestik',
        name  : 'Bank Lain'
      },
      {
        label : 'Maestro',
        name  : 'Maestro'
      },
    ]
  }

  key               =
  {
    onUs :
    {
      name : 'nameOnUs',
      mdr : 'mdrOnUs',
      flag : 'isActiveOnUs'
    },
    offUs :
    {
      name : 'nameOffUs',
      mdr : 'mdrOffUs',
      flag : 'isActiveOffUs'
    }
  }

  fiturMenuDebit : FiturFasilitasDetails[] =
  [
    {
      name  : 'EAL',
    },
    {
      name  : 'Tunai BCA',
      children1 : 
      [{
        inputType : 'currency',
        name      : 'Fee',
      },
      {
        inputType : 'currency',
        name      : 'Biaya Admin',
      }]
    },
    {
      name  : 'Transfer Virtual Account',
    },
    { 
      name  : 'Enable Fee Debit',
      children1 : 
      [{
        inputType : 'currency',
        name      : 'Fee',
      }]
    },
    {
      name  : 'MPN',
    },
  ]
  
  @Input() jsonKey;
  @Input() category;
  @Input() dataDebit;
  length;

  constructor() { }

  ngOnInit(): void {
    if(this.dataDebit && this.dataDebit[this.jsonKey.facilityFiturs])
    {
      this.fiturMenuDebit.forEach(menu => {
        this.dataDebit[this.jsonKey.facilityFiturs].forEach(fitur =>
        {
          if(fitur.name == menu.name)
          {
            menu.value = true;
            if(menu.children1)
            {
              menu.children1.forEach(itemChild => {
                fitur[this.jsonKey.facFiturItems].forEach(itemFitur => 
                  {
                      if(itemFitur.name == itemChild.name && itemFitur.value && itemFitur.value != 'false')
                      {
                        itemChild.value = itemFitur.value;
                      }
                  });
              })
            }
          }
       })
      })
      this.length = this.dataDebit[this.jsonKey.facilityFiturs].length;
    }

  }

}
