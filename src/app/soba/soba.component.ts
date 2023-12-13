import { Component,
  OnInit,
  HostBinding,
  Input // dodato je ovo
  }from '@angular/core';

import { Soba } from './soba.model';
import { RoomServiceService } from '../room-service.service'; // Prilagodite putanju prema stvarnom mestu vašeg servisa


 

@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css'],
  providers: [RoomServiceService] 
})

export class SobaComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() soba: Soba;

  constructor( private roomService: RoomServiceService) {
    this.soba = new Soba(
      0,
      'init',
      'init',
      0,0);
  }
 
  voteUp(soba: Soba, votes: number) {
    soba.votes += 1;
    this.roomService.updateRoom(  soba).subscribe(
        (data) => {
            // Ovde možete obraditi odgovor ako je potrebno
            console.log(data);
        },
        (error) => {
            // Postupak u slučaju greške
            console.error(error);
        }
    );
    return false;
}
  voteDown(soba: Soba, votes: number) {
    soba.votes -= 1;
    this.roomService.updateRoom(  soba).subscribe(
        (data) => {
            // Ovde možete obraditi odgovor ako je potrebno
            console.log(data);
        },
        (error) => {
            // Postupak u slučaju greške
            console.error(error);
        }
    );
    return false;
  }
  ngOnInit() {
  }
}
  

  
