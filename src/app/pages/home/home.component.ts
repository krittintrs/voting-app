import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/services/vote.service';
import { Vote } from '../models/vote.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 1;
	pageSize = 5;
  votes: Vote[] = [];
  pagedVotes: Vote[] = [];


  constructor(private VoteService: VoteService) {}

  ngOnInit(): void {
    this.VoteService.getVotes().subscribe((data: Vote[]) => {
      this.votes = data;
      this.refreshVotes();
    });
  }

  refreshVotes() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedVotes = this.votes.slice(start, end);
  }

  openModal(vote: Vote, action: string): void {}
}
