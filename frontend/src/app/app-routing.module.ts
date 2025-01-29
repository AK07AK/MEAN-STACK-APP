import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { RegisterSchoolComponent } from './user/register-school/register-school.component';
import { OrderComponent } from './user/order/order.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { SchoolsListComponent } from './admin/schools-list/schools-list.component';
import { AboutSorobonComponent } from './user/about-sorobon/about-sorobon.component';

const routes: Routes = [
  {path:"",redirectTo:"user/login",pathMatch:'full'},
  {path:"user/login",component:LoginComponent},
  {path:"user/about-sorobon",component:AboutSorobonComponent},
  {path:"user/register",component:SignupComponent},
  {path:"school/register",component:RegisterSchoolComponent},
  {path:"user/order",component:OrderComponent},
  {path:"admin/order/list",component:OrdersComponent},
  {path:"admin/schools/list",component:SchoolsListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
