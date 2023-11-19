import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {
  ponudaItems!: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.ponudaItems = this.dataService.getPonudaItems();
  }
}
