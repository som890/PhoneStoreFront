import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_service/user.service';
import { AuthGuard } from './_auth/auth.guard';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
