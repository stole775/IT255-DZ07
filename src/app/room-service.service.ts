import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  private cenaPonoci: number = 2000;

   getCena(brojNoci: number): number{
    if(brojNoci>7)
    return this.cenaPonoci*brojNoci*0.9;
else
    return this.cenaPonoci*brojNoci;

   }

  constructor() { }
}
