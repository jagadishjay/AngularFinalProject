import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './services/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import {RoleGuard} from './services/role.guard';
import { SignupComponent } from './signup/signup.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
 {path:'', redirectTo:'login', pathMatch:'full'},
 {path:'login', component: LoginComponent},
 {path:'signup', component:SignupComponent},
 {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
 {path:'product',component:AddProductComponent},
 {path:'admin',component:AdminComponent , canActivate:[RoleGuard]},
 {path:'theme',component:ThemeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
