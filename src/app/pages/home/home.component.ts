import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/services/vote.service';
import { Vote } from 'src/app/models/vote.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VoteModalComponent } from 'src/app/modals/vote-modal/vote-modal.component';
import { ReportModalComponent } from 'src/app/modals/report-modal/report-modal.component';

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

  constructor(
    private voteService: VoteService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.voteService.getVotes().subscribe((data: Vote[]) => {
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
  
  openVoteModal(vote: Vote) {
    const modalRef = this.modalService.open(VoteModalComponent);
    modalRef.componentInstance.vote = vote;

    modalRef.result.then((result) => {
      if (result === 'submitted') {
        this.voteService.getVotes().subscribe((data: Vote[]) => {
          this.votes = data;
          this.refreshVotes();
        });
      }
    }).catch((error) => {
      console.log('Modal dismissed', error);
    });
  }


  openReportModal(vote: Vote) {
    const modalRef = this.modalService.open(ReportModalComponent);
    modalRef.componentInstance.vote = vote;
  }

  refreshVoteData() {
    this.voteService.getVotes().subscribe((updatedVotes: Vote[])  => {
      this.votes = updatedVotes;
    });
  }

}
