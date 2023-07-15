import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboradComponent } from './components/admin-dashborad/admin-dashborad.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';




import { AgGridModule } from 'ag-grid-angular';
import { UserComponent } from './components/user/user.component';
import { TodoComponent } from './components/todo/todo.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';



@NgModule({
  declarations: [
    AdminDashboradComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    TodoComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule,

  ]
})
export class AdminModule { }
