import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-controller',
  templateUrl: './detail-controller.component.html',
  styleUrls: ['./detail-controller.component.css']
})
export class DetailControllerComponent implements OnInit {
  @Input() detail : any;
  @Input() data : any;

  show : boolean;
  constructor() { }

  ngOnInit(): void {
    this.checkData()
  }

  checkTypeJsonNameDetail()
  {
    return typeof this.detail.jsonName === 'string' ? true : false;
  }

  checkData()
  {
    if(this.detail.hidden)
    {
      if(this.checkTypeJsonNameDetail())
      {
        this.show =  this.data[this.detail.jsonName] ? true : false;
      }
      else
      {
        var count = 0;
        this.detail.jsonName.forEach(jsonName => {
          this.data[jsonName] ? count++ : null;
        });
        this.show =  count != 0 ? true : false;
      } 
    }
    else
    {
      this.show =  true;
    }
  }

}
