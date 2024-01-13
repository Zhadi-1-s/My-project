import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/presentation/main.component';
import { MainModule } from './components/main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClubsModule } from './components/clubs/clubs.module';
import { ClubComponent } from './components/club/presentation/club.component';
import { ClubModule } from './components/club/club.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ClubsModule,
    ClubModule
  ],
  providers: [Navigator],
  bootstrap: [AppComponent]
})
export class AppModule { }
