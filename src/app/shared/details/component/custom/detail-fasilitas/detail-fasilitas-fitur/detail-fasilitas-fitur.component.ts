import { Component, OnInit, Input } from '@angular/core';
import { FiturFasilitasDetails } from '../../../../model/fasilitas.model';

@Component({
  selector: 'app-detail-fasilitas-fitur',
  templateUrl: './detail-fasilitas-fitur.component.html',
  styleUrls: ['./detail-fasilitas-fitur.component.css']
})
export class DetailFasilitasFiturComponent implements OnInit {
  @Input() fiturConfiguration : FiturFasilitasDetails[];
  @Input() length : number;
  constructor() { }

  ngOnInit(): void {
  }

}
