import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.css']
})
export class PreporukaComponent implements OnInit {
  preporukeItems!: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.preporukeItems = this.dataService.getPreporukeItems();
  }
}
