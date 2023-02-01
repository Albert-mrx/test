import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './reto/login/login.component';
import { PostComponent } from './reto/post/post.component';
import { CanactivateGuard } from './canactivate.guard';
const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'post',component:PostComponent,canActivate:[CanactivateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
