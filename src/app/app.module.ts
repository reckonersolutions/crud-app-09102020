import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { UserdataService } from './userdata.service';

@NgModule({
  imports:[ 
    BrowserModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ AppComponent,  UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserdataService],

})
export class AppModule { }
