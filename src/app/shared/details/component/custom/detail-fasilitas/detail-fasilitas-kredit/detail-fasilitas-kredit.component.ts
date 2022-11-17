import { Component, OnInit, Input } from '@angular/core';
import { TableMdrDetails, FiturFasilitasDetails } from '../../../../model/fasilitas.model';

@Component({
  selector: 'app-detail-fasilitas-kredit',
  templateUrl: './detail-fasilitas-kredit.component.html',
  styleUrls: ['./detail-fasilitas-kredit.component.css']
})
export class DetailFasilitasKreditComponent implements OnInit {
  kreditMDR : {[key : string] : TableMdrDetails[]} =
  {
    onUs : 
    [
      {
        label : 'BCA Card',
        name  : 'BCA Card'
      },
      {
        label : 'BCA Visa',
        name  : 'BCA Visa'
      },
      {
        label : 'BCA Master',
        name  : 'BCA Master'
      },
      {
        label : 'BCA JCB',
        name  : 'BCA JCB'
      },
      {
        label : 'BCA Amex',
        name  : 'BCA Amex'
      },
      {
        label : 'BCA CUP',
        name  : 'BCA CUP'
      }
    ],
    offUs : 
    [
      {
        label : 'Visa',
        name  : 'Visa'
      },
      {
        label : 'Master',
        name  : 'Master'
      },
      {
        label : 'JCB',
        name  : 'JCB'
      },
      {
        label : 'Amex',
        name  : 'Amex'
      },
      {
        label : 'CUP',
        name  : 'CUP'
      }
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

  fiturMenuKredit : FiturFasilitasDetails[] =
  [
    {
      name  : 'DCC',
      children1 : 
          [
            {
              name : 'DCC Print Offering',
              inputType : 'checkbox',
            },
            {
              name : 'Rebate DCC',
              inputType : 'text',
            }
          ]
      },
    {
      name  : 'Card Ver+Offline+Release Card Ver',
    },
    {
      name  : 'Cicilan',
      children1 : 
      [ 
        {
          name : 'Cicilan Regular',
          inputType : 'checkbox',
          children2 : 
          [
            {
              name :  'Plan' ,
              inputType : 'text',
            },
            {
              name :  'Everyday Plan' ,
              inputType : 'text',
            },
          ]
        },
        {
          name : 'Cicilan 0%',
          inputType : 'checkbox',
        }
      ],
    },
    { 
      name  : 'Enable Fee Kredit',
      children1 : 
      [
        {
        inputType : 'currency',
        name      : 'Fee',
        }
      ]
    },
    {
      name  : 'Manual Key In + Show Expiry',
    },
    {
      name  : 'Tips',
    },
    {
      name  : 'Adjustment',
    },
    {
      name  : 'Refund',
    },
  ]

  @Input() jsonKey;
  @Input() category;
  @Input() dataKredit;
  
  length = 0;
  constructor() { }

  ngOnInit(): void {
    if(this.dataKredit && this.dataKredit[this.jsonKey.facilityFiturs])
    {
      this.fiturMenuKredit.forEach(menu => {
        this.dataKredit[this.jsonKey.facilityFiturs].forEach(fitur =>
        {
          if(fitur.name == menu.name)
          {
            menu.value = true;
            this.length++;
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
          else if(menu.name == 'Cicilan' && (fitur.name == 'Cicilan Regular' || fitur.name == 'Cicilan 0%'))
          {
            menu.value = true;
            this.length++;
            const itemMenu = menu.children1.find((child) => child.name == fitur.name)
            itemMenu.value = true;
            if(itemMenu.children2)
            {
              itemMenu.children2.forEach(itemChild => {
                fitur[this.jsonKey.facFiturItems].forEach(itemFitur => 
                  {
                      if(itemFitur.name == itemChild.name)
                      {
                        itemChild.value = itemFitur.value;
                      }
                  });
              })
            }
          }
        });
      });
      }
    }


}
