import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TestPipe } from './test.pipe';  
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BookFormComponent } from './book/book.component';
import { CartserviceComponent } from './cartservice/cartservice.component';


BookFormComponent

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TestPipe,
    HomeComponent,
    HeaderComponent,
    BookFormComponent,
    CartserviceComponent
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
