import { Component,
  OnInit,
  HostBinding,
  Input // dodato je ovo
  }from '@angular/core';

import { Soba } from './soba.model';


 

@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css']
})

export class SobaComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() soba: Soba;

  constructor() {
    this.soba = new Soba(
      'init',
      'init',
      0,0);
  }
 
  voteUp() {
    this.soba.voteUp()
    return false;
  }
  voteDown() {
    this.soba.voteDown();
    return false;
  }
  ngOnInit() {
  }
}
  

  
