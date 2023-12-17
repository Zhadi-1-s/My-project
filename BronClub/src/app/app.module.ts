import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/presentation/main.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { MainModule } from './components/main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
   
  ],
  providers: [Navigator],
  bootstrap: [AppComponent]
})
export class AppModule { }
