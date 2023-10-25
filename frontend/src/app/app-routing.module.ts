import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickyWallComponent } from './sticky-wall/sticky-wall.component';

const routes: Routes = [
  { path: '', redirectTo: '/sticky-wall', pathMatch: 'full' },
  { path: 'sticky-wall', component: StickyWallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
