import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickyWallComponent } from './sticky-wall/sticky-wall.component';
import { TodayComponent } from './today/today.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  { path: '', redirectTo: '/sticky-wall', pathMatch: 'full' },
  { path: 'sticky-wall', component: StickyWallComponent},
  {path:"today", component:TodayComponent},
  {path:"upcoming", component:UpcomingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
