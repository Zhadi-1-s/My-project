import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/presentation/main.component';
import { ClubsComponent } from './components/clubs/presentation/clubs.component';
import { ClubComponent } from './components/club/presentation/club.component';

const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'clubs',component:ClubsComponent},
  {path:'club/:id',component:ClubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
