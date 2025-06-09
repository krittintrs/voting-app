import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vote } from 'src/app/models/vote.model';
import { VoteDescriptionModalComponent } from '../vote-description-modal/vote-description-modal.component';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})
export class ReportModalComponent implements OnInit {
  @Input() vote!: Vote;
  totalVote = 0;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    if (this.vote?.options) {
      this.totalVote = this.vote.options.reduce((sum, option) => sum + option.voteCount, 0);
      console.log(this.totalVote)
    }
  }

  openDescriptionModal() {
    const modalRef = this.modalService.open(VoteDescriptionModalComponent);
    modalRef.componentInstance.description = this.vote.topicDescription;
  }
}
