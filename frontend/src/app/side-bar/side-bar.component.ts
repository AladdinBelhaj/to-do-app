import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor() {}

  toggleSidebar() {
    this.sidenav.toggle(); // This will toggle the sidebar's open/close state
  }
}

