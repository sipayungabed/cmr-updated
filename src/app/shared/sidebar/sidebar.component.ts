import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarList : any = 
  [{
    label : "Data Master",
    icon : "fas fa-book tabs",
    url : "/data-master"
  },
  {
    label : "Inquiry Data Merchant",
    icon : "fas fa-book tabs",
    url : "/inquiry-data-merchant"
  },
  {
    label : "Parameter Scoring",
    icon : "fas fa-book tabs",
    url : "/parameter-scoring"
  },
  {
    label : "Tabel Hasil Scoring",
    icon : "fas fa-book tabs",
    url : "/maintenance-scoring"
  },
  {
    label : "Tracking Pengajuan",
    icon : "fas fa-map-marker-alt tabs",
    url : "/tracking-pengajuan"
  },
]

  constructor() { }

  ngOnInit(): void {
  }
}
