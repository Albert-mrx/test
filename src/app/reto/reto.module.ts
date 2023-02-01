import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    MenuComponent,
    LoginComponent,
    PostComponent
  ]
})
export class RetoModule { }
