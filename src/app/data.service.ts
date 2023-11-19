// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  ponudaItems: string[] = ['Jela à la carte', 'Specijalna pića', 'Deserti'];
  preporukeItems: string[] = ['Preporučena jela', 'Najbolja vina', 'Slatki zalogaji posle obroka'];
  hotelInfo: string[] = [
    'MetHotel je vaša destinacija za luksuzan boravak i gastronomsko uživanje.',
    'Naš cilj je pružiti vam vrhunski doživljaj kroz:',
    'Ekskluzivni smeštaj',
    'Gourmet restorane',
    'Prijateljsko osoblje',
  ];

  getPonudaItems(): string[] {
    return this.ponudaItems;
  }

  getPreporukeItems(): string[] {
    return this.preporukeItems;
  }

  getHotelInfo(): string[] {
    return this.hotelInfo;
  }


  
}
