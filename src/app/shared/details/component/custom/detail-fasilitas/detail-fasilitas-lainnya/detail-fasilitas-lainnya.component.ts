import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { FiturFasilitasDetails, InputFasilitas } from '../../../../model/fasilitas.model';

@Component({
  selector: 'app-detail-fasilitas-lainnya',
  templateUrl: './detail-fasilitas-lainnya.component.html',
  styleUrls: ['./detail-fasilitas-lainnya.component.css']
})
export class DetailFasilitasLainnyaComponent implements OnInit {

  fiturMenuEdcCompliment: FiturFasilitasDetails =
  {
    name  : 'EDC Compliment',
  }

  fiturMenuLoyalty: FiturFasilitasDetails =
  {
    name  : 'Loyalty',
  }

  fiturMenuLainnya : FiturFasilitasDetails[] =
  [
    { 
      name  : 'ECR',
      children1 : 
      [
        {
          inputType : 'text',
          name      : 'Tipe',
          altValue : 
          {
            NA : "ECR Fase 1 atau 3",
            KA :"ECR Fase KAI",
            NP :"ECR Fase NPCT1",
            PL :"ECR Fase Pelindo",
            PM :"ECR Fase Patraniaga",
            BZ :"ECR Fase Benzine",
            MD :"ECR Fase MCD",
            Decathlon :"ECR Fase Decathlon",
            ST :"ECR Fase Samsat",
          }
        },
      ]
    },
    { 
      name  : 'Number of Print',
      children1 : 
      [
        {
          inputType : 'text',
          name      : 'Jumlah',
        },
      ]
    },
    { 
      name  : 'Fare & Non Fare',
      children1 : 
      [
        {
          inputType : 'checkbox',
          name      : 'Enable Print',
        },
        {
          inputType : 'checkbox',
          name      : 'Tampilan Layar',
        },
        {
          inputType : 'text',
          name      : 'Ticket No.',
        },
      ]
    },
    { 
      name  : 'Custom Masking Merchant Copy',
      children1 : 
      [
        {
          inputType : 'text',
          name      : 'Masking',
          altValue : 
          {
            '124':'1234.1234.**.1234/1.2.4',
            'TRC':'*.*.**.1234/TRC',
            '44':'1234.*.*.1234/4.4',
            '64':'1234.12xx.xxxx.1234/6.4',
          }
        },
      ]
    },
    { 
      name  : 'Maksimum Amount',
      children1 : 
      [
        {
          inputType : 'text',
          name      : 'Nominal',
        },
      ]
    }
  ]

  fiturMenuCMR  : FiturFasilitasDetails =
  { 
    name  : 'CMR',
    children1 : []
  }

  fiturMenuAutoSettle  : FiturFasilitasDetails =
  { 
    name  : 'Auto Settle',
    children1 : 
    [
    ]
  }

  fiturMenuFreeUangIuran  : FiturFasilitasDetails =
  { 
    name  : 'Free Uang Iuran',
    children1 : 
    [
    ]
  }

  fiturMenuForceSettlementDay  : FiturFasilitasDetails =
  { 
    name  : 'Force Settlement Day',
    children1 : 
    [
    ]
  }

  fiturNumberOfReprint : FiturFasilitasDetails =
  { 
    name  : 'Number of Reprint',
    children1 : 
    [
      {
        inputType : 'text',
        name      : 'Jumlah',
        altValue  : {'255' : 'No Limit'} 
      },
    ]
  }

  ecrMaskingMapping =
  {
    '16': "By Merchant",
    '17':"Unmask",
    '18': "6.4",
  }

  @Input() dataLainnya;
  @Input() dataKredit;
  @Input() dataCMR;
  @Input() dataFreeUangIuran;
  @Input() dataForceSettlementDay;
  @Input() dataAutoSettle;
  @Input() jsonKey;
  length = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.dataLainnya && this.dataLainnya[this.jsonKey.facilityFiturs])
    {
      this.fiturMenuLainnya.forEach((menu, index) => {
        this.dataLainnya[this.jsonKey.facilityFiturs].forEach(fitur =>
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
                        itemChild.value = itemChild.altValue && itemChild.altValue[itemFitur.value] ? itemChild.altValue[itemFitur.value] : itemFitur.value;
                      }
                  });
              })
            }
          }
          else if(menu.name == 'ECR' && (fitur.name == "ECR Lock Screen" || fitur.name == "ECR Masking"))
          {
            var name;
            var value;
            if(fitur.name == "ECR Lock Screen")
            {
              name = fitur.name;
              value = 'true';
              const inputType = 'checkbox';
              menu.children1[1] = ({name, value, inputType} as InputFasilitas);
            }
            else if(fitur.name == "ECR Masking")
            {
              name = fitur[this.jsonKey.facFiturItems][0].name;
              value = this.ecrMaskingMapping[fitur[this.jsonKey.facFiturItems][0].value];
              const inputType = 'text';
              menu.children1[2] = ({name, value, inputType} as InputFasilitas);
            }
            this.length++;
          }
          else if(index == this.fiturMenuLainnya.length-1 && fitur.name == 'Number of Reprint')
          {
            this.length++;
            this.fiturNumberOfReprint.value = true;
            this.fiturNumberOfReprint.children1[0].value =  
            this.fiturNumberOfReprint.children1[0].altValue[fitur[this.jsonKey.facFiturItems][0].value] ? 
            this.fiturNumberOfReprint.children1[0].altValue[fitur[this.jsonKey.facFiturItems][0].value] : fitur[this.jsonKey.facFiturItems][0].value;
          }
       })
      })
    }
    if(this.dataKredit && this.dataKredit[this.jsonKey.facilityFiturs])
    {
     const index = this.dataKredit[this.jsonKey.facilityFiturs].findIndex((itemKR) => itemKR.name == 'Loyalty')
     if(index != -1)
     {
       this.fiturMenuLoyalty.value = true;
       this.fiturMenuLainnya.unshift(this.fiturMenuLoyalty);
       this.length++;
     }
    }
    if(this.dataKredit && this.dataKredit[this.jsonKey.facilityFiturs])
    {
     const index = this.dataKredit[this.jsonKey.facilityFiturs].findIndex((itemKR) => itemKR.name == 'EDC Compliment')
     if(index != -1)
     {
       this.fiturMenuEdcCompliment.value = true;
       this.fiturMenuLainnya.unshift(this.fiturMenuEdcCompliment);
       this.length++;
     }
    }
    if(this.dataCMR && this.dataCMR[this.jsonKey.facilityItems])
    {
      this.fiturMenuCMR.value = true;
      this.dataCMR[this.jsonKey.facilityItems].forEach((itemCMR, index) => {
        var name = 'Email ' + (index+1);
        var value = itemCMR.value;
        const inputType = 'text';
        this.fiturMenuCMR.children1.push({name, value, inputType} as InputFasilitas)
      });
      this.fiturMenuLainnya.push(this.fiturMenuCMR);
      this.length++;
    }
    if(this.dataAutoSettle &&  this.dataAutoSettle[this.jsonKey.facilityItems])
    {
      this.fiturMenuAutoSettle.value = true;
      this.dataAutoSettle[this.jsonKey.facilityItems].forEach((itemAS) => {
        var inputType = '';
        var name = itemAS.name;
        var value = itemAS.value;
        inputType = name == 'Setiap Jam' ?  'hour' : 'text';
        this.fiturMenuAutoSettle.children1.push({name, value, inputType} as InputFasilitas)
      });
      this.fiturMenuLainnya.push(this.fiturMenuAutoSettle);
      this.length++;
    }
    if(this.dataForceSettlementDay && this.dataForceSettlementDay[this.jsonKey.facilityItems])
    {
      this.fiturMenuForceSettlementDay.value = true;
      this.dataForceSettlementDay[this.jsonKey.facilityItems].forEach((itemFSD) => {
        var name = 'Setiap';
        var value = itemFSD.value;
        const inputType = 'text';
        this.fiturMenuForceSettlementDay.children1.push({name, value, inputType} as InputFasilitas)
      });
      this.fiturMenuLainnya.push(this.fiturMenuForceSettlementDay);
      this.length++;
    }
    if(this.dataFreeUangIuran && this.dataFreeUangIuran[this.jsonKey.facilityItems])
    {
      this.fiturMenuFreeUangIuran.value = true;
      this.dataFreeUangIuran[this.jsonKey.facilityItems].forEach((itemFUI) => {
        var name = 'Free Uang Iuran';
        var value = itemFUI.value;
        const inputType = 'radio';
        this.fiturMenuFreeUangIuran.children1.push({name, value, inputType} as InputFasilitas)
      });
      this.fiturMenuLainnya.push(this.fiturMenuFreeUangIuran);
      this.length++;
    }
    this.fiturMenuLainnya.push(this.fiturNumberOfReprint);
  }

}
