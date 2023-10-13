import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { StickyWallComponent } from './sticky-wall/sticky-wall.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './sticky-wall/modal/modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    StickyWallComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
