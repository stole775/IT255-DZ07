import { Component } from '@angular/core';
import { Soba } from './soba/soba.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  naziv(naziv: any) {
    throw new Error('Method not implemented.');
  }
  sobe: Soba[]; //osobina komponente


  constructor() {
    this.sobe = [
      new Soba('Hotel Grand S1', 'http://hotelgrand.com/soba1', 3, 2),
      new Soba('Hotel Grand S2', 'http://hotelgrand.com/soba2', 2, 4),
      new Soba('New City', 'http://newcity.rs/sobe/2', 1, 1),
    ];
  }
  addSoba(naziv: HTMLInputElement, link: HTMLInputElement, brGostiju: HTMLInputElement): boolean {
    const brGostijuValue = Number(brGostiju.value); // Convert to a number
    console.log(`Adding article naziv: ${naziv.value}, link: ${link.value}, brGostiju: ${brGostijuValue}`);
    this.sobe.push(new Soba(naziv.value, link.value, 0, brGostijuValue));
    naziv.value = '';
    link.value = '';
    brGostiju.value = '';
    return false;
  }
  removeSoba(){}

}
