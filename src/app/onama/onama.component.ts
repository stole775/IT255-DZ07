import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-o-nama',
  templateUrl: './onama.component.html',
  styleUrls: ['./onama.component.css']
})
export class ONamaComponent implements OnInit {
  hotelInfo!: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.hotelInfo = this.dataService.getHotelInfo();
  }

 

}
