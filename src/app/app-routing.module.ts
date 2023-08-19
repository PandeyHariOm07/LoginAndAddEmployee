import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { AddedempComponent } from './addedemp/addedemp.component';

const routes: Routes = [
  {path:"",redirectTo: "/",pathMatch:"full"},
  {path:"add",component:AddComponent},
  {path:"signUp",component:SignupComponent},
  {path:"detail",component:DetailsComponent},
  {path:"aadded",component:AddedempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
