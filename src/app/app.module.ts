import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PasswordService} from "./password.service";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
