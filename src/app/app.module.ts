import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobaComponent } from './soba/soba.component'; 
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { ONamaComponent } from './onama/onama.component';
import { DataService } from './data.service';
import { RoomServiceService } from './room-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SobaComponent, 
    PonudaComponent,
    PreporukaComponent,
    ONamaComponent 
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService,RoomServiceService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
