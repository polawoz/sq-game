import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsGeneratorComponent } from './teams-generator/teams-generator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'teamsGenerator', component:TeamsGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
