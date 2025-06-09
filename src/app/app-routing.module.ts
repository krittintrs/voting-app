import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateVoteComponent } from './pages/create-vote/create-vote.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-vote', component: CreateVoteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
