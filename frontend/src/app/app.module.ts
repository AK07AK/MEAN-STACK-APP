import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { OrderComponent } from './user/order/order.component';
import { RegisterSchoolComponent } from './user/register-school/register-school.component';
import { AboutSorobonComponent } from './user/about-sorobon/about-sorobon.component';
import { SchoolsListComponent } from './admin/schools-list/schools-list.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomePageComponent,
    OrderComponent,
    RegisterSchoolComponent,
    AboutSorobonComponent,
    SchoolsListComponent,
    OrdersComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
