import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelcardComponent } from './hotelcard/hotelcard.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
