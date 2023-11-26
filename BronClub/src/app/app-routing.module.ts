import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/presentation/main.component';
import { ClubsComponent } from './components/clubs/clubs.component';

const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'clubs',component:ClubsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
