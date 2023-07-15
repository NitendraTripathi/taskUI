import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { AuthGuard } from './gaurds/gaurds/auth.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"forgot",component:ForgotPasswordComponent},
  {path:"",redirectTo:"/login",pathMatch:'full'},
  {
    path:"admin",  loadChildren:()=>
      import('./modules/admin/admin.module')
  .then((m) => m.AdminModule)},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
