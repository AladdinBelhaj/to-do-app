import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickyWallComponent } from './sticky-wall/sticky-wall.component';
import { TodayComponent } from './today/today.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'sticky-wall', component: StickyWallComponent },
  { path: 'today', component: TodayComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
