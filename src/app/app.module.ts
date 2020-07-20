import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderComponent } from './components/waiter/order/order.component';
import { PendingsComponent } from './components/waiter/pendings/pendings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    PendingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
