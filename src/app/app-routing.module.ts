import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './profile/about/about.component';

const routes: Routes = [
  {
    path:"" , component:ProfileComponent , pathMatch:'full',
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
