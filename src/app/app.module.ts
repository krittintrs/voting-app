import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateVoteComponent } from './pages/create-vote/create-vote.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { VoteModalComponent } from './modals/vote-modal/vote-modal.component';
import { ReportModalComponent } from './modals/report-modal/report-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    CreateVoteComponent,
    VoteModalComponent,
    ReportModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
