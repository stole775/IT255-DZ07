import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  private apiUrl = 'http://localhost:3000/podaci';  //

  private cenaPonoci: number = 2000;

  constructor(private http: HttpClient) { }


  getCena(brojNoci: number): number {
    if (brojNoci > 7) {
      return this.cenaPonoci * brojNoci * 0.9;
    } else {
      return this.cenaPonoci * brojNoci;
    }
  }


  getSobe(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addRoom(room: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, room);
  }

  updateRoom(room: any): Observable<any> {
    const url = `${this.apiUrl}/${room.id}`;
    return this.http.put<any>(url, room);
  }


 
  deleteRoom(roomId: number): Observable<any> {
    const url = `${this.apiUrl}/${roomId}`;
    return this.http.delete<any>(url);
  }
}
