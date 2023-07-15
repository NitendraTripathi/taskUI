import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboradComponent } from './components/admin-dashborad/admin-dashborad.component';

import { UserComponent } from './components/user/user.component';
import { TodoComponent } from './components/todo/todo.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

const routes: Routes = [
  {path:"", component:AdminDashboradComponent, children: [
    {path:"user", component:UserComponent},
    {path:"landing", component:LandingpageComponent},
    {path:"todo", component:TodoComponent},
    {path:"", redirectTo:'/admin/landing', pathMatch:"full"},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
