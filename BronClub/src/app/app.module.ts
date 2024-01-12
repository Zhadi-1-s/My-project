import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/presentation/main.component';
import { MainModule } from './components/main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClubsModule } from './components/clubs/clubs.module';
import { ClubComponent } from './components/club/club.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ClubsModule
  ],
  providers: [Navigator],
  bootstrap: [AppComponent]
})
export class AppModule { }
