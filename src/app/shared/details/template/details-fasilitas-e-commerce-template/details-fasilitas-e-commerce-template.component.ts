import { Component, OnInit, Input } from '@angular/core';
import { FiturFasilitasDetails, TableMdrDetails } from '../../model/fasilitas.model';
@Component({
  selector: 'app-details-fasilitas-e-commerce-template',
  templateUrl: './details-fasilitas-e-commerce-template.component.html',
  styleUrls: ['./details-fasilitas-e-commerce-template.component.css']
})
export class DetailsFasilitasECommerceTemplateComponent implements OnInit {
  @Input() dataList : any;
  dataFasilitas     : {[key : string] : any} = {};
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
      },
    ],
    offUs : 
    [
      {
        label : 'CUP',
        name  : 'CUP'
      },
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

  allFitur : FiturFasilitasDetails[] =
  [
    {
      name  : 'Kredit',
      value : true
    },
    {
      name  : 'Refund',
    },
    {
      name  : 'Void',
    },
    {
      name  : 'Payment Link',
    },
    {
      name  : 'Moto / VEDC',
    },
    {
      name  : 'Allow Advance API',
    },
    {
      name  : 'Tokenization',
    },
    { 
      name  : 'Fare & Non Fare',
    },
    {
      name  : 'Reward',
    },
    {
      name  : 'DCC',
      children1 : 
          [
            {
              name : 'DCC Value',
              inputType : 'text',
              append    : '%'
            }
          ]
    },
    {
      name  : 'Klikpay Debit',
      children1 : 
          [
            {
              name : 'Fee Debit',
              inputType : 'currency',
            }
          ]
    },
    {
      name  : 'Klikpay Debit & Kredit',
      children1 : 
          [
            {
              name : 'Fee Debit',
              inputType : 'currency',
            }
          ]
    },
    {
      name  : 'Manual Settle',
      children1 : 
          [
            {
              name : 'Never Force Settle',
              inputType : 'radio',
            },
            {
              name : 'Force Settle After',
              inputType : 'text',
              append : 'Day'
            }
          ]
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
            {
              name :  'Min Transaction' ,
              inputType : 'currency',
            },
            {
              name :  'Max Transaction' ,
              inputType : 'currency',
            },
          ]
        },
        {
          name : 'Cicilan 0%',
          inputType : 'checkbox',
          children2 : 
          [
            {
              name :  'Min Transaction' ,
              inputType : 'currency',
            },
            {
              name :  'Max Transaction' ,
              inputType : 'currency',
            },
          ]
        }
      ],
    },
  ]
  fiturLeft;
  fiturRight;
  dataKredit;
  length = 1;

  constructor() { }

  ngOnInit(): void {
    this.insertValueFitur()
    this.searchDataFasilitasKredit()
  }

  searchDataFasilitasKredit()
  {
    this.dataKredit = this.dataList.find(data => data.name.toString().toUpperCase() == 'KREDIT');
    if(!this.dataKredit)
    {
      this.dataKredit = this.dataList.find(data => data.name.toString().toUpperCase() == 'CREDIT');
    }
  }

  insertValueFitur()
  {
    if(this.dataList)
    {
    this.allFitur.forEach(menu => {
      this.dataList.forEach(oFacilities => {
        oFacilities.oFacilityFiturs.forEach(fitur =>{
          if(fitur.name == menu.name && menu.name != 'Manual Settle')
          {
            menu.value = true;
            this.length++;
            if(menu.children1)
            {
              menu.children1.forEach(itemChild => {
                fitur.oFacFiturItems.forEach(itemFitur => 
                  {
                      if(itemFitur.name == itemChild.name && itemFitur.value && itemFitur.value != 'false')
                      {
                        itemChild.value = itemFitur.value;
                      }
                  });
              })
            }
          }
          else if(fitur.name == menu.name && menu.name == 'Manual Settle')
          {
            menu.value = true;
            this.length++;
            if(fitur.oFacFiturItems[0].value == "0")
            {
              menu.children1[0].value = true;
            }
            else
            {
              menu.children1[1].value = fitur.oFacFiturItems[0].value;
            }
          }
          else if(menu.name == 'Cicilan' && (fitur.name == 'Cicilan Regular' || fitur.name == 'Cicilan 0%'))
          {
            menu.value = true;
            const itemMenu = menu.children1.find((child) => child.name == fitur.name)
            itemMenu.value = true;
            this.length++;
            if(itemMenu.children2)
            {
              itemMenu.children2.forEach(itemChild => {
                fitur.oFacFiturItems.forEach(itemFitur => 
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
      });
    });
    }
    this.fiturLeft = this.allFitur.slice(0, 10);
    this.fiturRight = this.allFitur.slice(10, this.allFitur.length);
  }

}
