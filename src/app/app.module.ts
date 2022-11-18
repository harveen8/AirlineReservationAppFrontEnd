import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { MoneyPipePipe } from './money-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogInPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    MoneyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
