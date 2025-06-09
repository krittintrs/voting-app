import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/services/vote.service';
import { Vote } from '../models/vote.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  votes: Vote[] = [];

  constructor(private VoteService: VoteService) {}

  ngOnInit(): void {
    this.VoteService.getVotes().subscribe((data: Vote[]) => {
      this.votes = data;
    });
  }

  openModal(vote: Vote, action: string): void {}
}
