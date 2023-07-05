import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registration',component:RegistrationComponent},
  {path: 'itemdetails',component:ItemdetailsComponent},
  {path: 'updateprofile',component:UpdateprofileComponent},
  {path: 'orderlist',component:OrderlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
