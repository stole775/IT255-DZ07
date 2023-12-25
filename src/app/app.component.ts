import { Component, OnInit } from '@angular/core';
import { Soba } from './soba/soba.model';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { RoomServiceService } from './room-service.service'; // Prilagodite putanju prema stvarnom mestu vašeg servisa
 
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RoomServiceService]  
})
export class AppComponent implements OnInit{

  title: string = ''; // *
  naziv: string = ''; // *
  sobe!: Soba[]; // lista
  selectedComponent: string = 'ponuda';
  novaSoba!: Soba;

  //DZo8
  klima: boolean = false;
  miniBar: boolean = false;
  sauna: boolean = false;
  racun: number = 1000;
  osnivica: number = 1000;
  brojNoci: number = 0;

  isMenuVisible = false;//poveznao jednosmernim bindingom u html

  deleteStatus: 'success' | 'error' | null = null;
  addStatus: 'success' | 'error' | 'greskaUDodavanju' | null = null;

  constructor(private router: Router,private elementRef: ElementRef, private roomService: RoomServiceService) {
 
  }
 

  ngOnInit(): void {
    this.roomService.getSobe().subscribe((sobe) => {
      this.sobe = sobe;
    });
  }
  addSoba(naziv: HTMLInputElement, link: HTMLInputElement, brGostiju: HTMLInputElement): boolean {
    console.log(this.sobe);
    const brGostijuValue = Number(brGostiju.value);
    const nazivValue = naziv.value.trim();
    const linkValue = link.value.trim();
     
     console.log( this.racun);
    // Provera da li vec postoji soba sa istim nazivom
    const exists = this.sobe.some(soba => soba.naziv === naziv.value);
    //ovde je na nivou ako se korisi dugme
    if (nazivValue.length < 6 || linkValue.length === 0 || brGostijuValue <= 0) {// Ako ovi uslovi ne budu zadovoljeni necemo dodati sobu
      this.addStatus = 'greskaUDodavanju';
      console.log('Neuspesno popunjavanje.');
    } else if (exists) {
      this.addStatus = 'error';
      console.log(`Soba sa nazivom ${naziv.value} već postoji.`);
    } else {
     // this.sobe.push(new Soba(naziv.value, link.value, 0, brGostijuValue));
     this.novaSoba = new Soba(0,naziv.value, link.value, 0, brGostijuValue,this.racun);
     this.roomService.addRoom(this.novaSoba).subscribe(novaSoba =>{
      this.sobe.push(novaSoba);
     });
    
      this.addStatus = 'success';
      console.log(`Soba sa nazivom ${naziv.value} uspešno dodata.`);
    }

    setTimeout(() => {
      this.addStatus = null;
    }, 3000); // 3 sekunde

    naziv.value = '';
    link.value = '';
    brGostiju.value = '';

    return false;
  }


  obrisiSobu(naziv: string): boolean {
    const index = this.sobe.findIndex(s => s.naziv === naziv);
  
    if (index !== -1) {
       const novaSoba = this.sobe[index];
      this.roomService.deleteRoom(novaSoba.id).subscribe(
        () => {
          this.sobe.splice(index, 1);
          this.deleteStatus = 'success';
          console.log(`Uspešno obrisana soba sa nazivom: ${naziv}`);
        },
        (error) => {
          this.deleteStatus = 'error';
          console.log(`Greška prilikom brisanja sobe sa nazivom ${naziv}: ${error}`);
        }
      );
    } else {
      this.deleteStatus = 'error';
      console.log(`Soba sa nazivom ${naziv} ne postoji.`);
    }
  
    setTimeout(() => {
      this.deleteStatus = null;
    }, 3000); // 3 sekunde
    return false;
  }
  

  showComponentStari(component: string): void {
    this.selectedComponent = component;
    this.isMenuVisible = true;
  }
  showComponent(component: string): void {
    this.router.navigate([component]);
    this.isMenuVisible = true;
  }

  @HostListener('document:click', ['$event'])
  toggleMenu(event: Event): void {
    const targetElement = event.target as HTMLElement;

    // Proveri da li je kliknuto na traku menija
    const isMenuClick = targetElement.closest('.ui.secondary.menu');

    // Ako nije kliknuto na traku menija, sakrij meni
    if (!isMenuClick) {
      this.isMenuVisible = false;
    }
  }
  proveriDuzinu(naziv: string): void {
    if (naziv.length < 6) {
      console.log("Naziv mora imati barem 6 karaktera.");
    } else {
      console.log("Naziv je ispravne dužine.");
    }
  }

  izracunajCenuKlima(): void {
   
  
    if (this.klima) {
      this.racun += 1000;
    }
    if (!this.klima) {
      this.racun -= 1000;
    }
 
 
  }izracunajCenuKMiniBar(): void {
   
 
    if (this.miniBar) {
      this.racun += 2000;
    }
    if (!this.miniBar) {
      this.racun -= 2000;
    }

 
  }
  izracunajCenuSauna(): void {
   
    if (this.sauna) {
      this.racun += 3000;
    } 
    if (!this.sauna) {
      this.racun -= 3000;
    } 
 
  }

  cenaSobe() {
 
  const cena = this.roomService.getCena(this.brojNoci);
  console.log(`Cena za ${this.brojNoci} noći: ${cena}`);
 
  this.racun = this.osnivica + cena; 
  
  }


  


}
