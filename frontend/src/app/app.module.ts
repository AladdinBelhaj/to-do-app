import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { StickyWallComponent } from './sticky-wall/sticky-wall.component'
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    StickyWallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
