import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { UserdataService } from './userdata.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserdataService],

})
export class AppModule { }
