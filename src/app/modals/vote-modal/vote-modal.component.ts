import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vote } from 'src/app/models/vote.model';
import { VoteService } from 'src/app/services/vote.service';
import { VoteDescriptionModalComponent } from '../vote-description-modal/vote-description-modal.component';

@Component({
  selector: 'app-vote-modal',
  templateUrl: './vote-modal.component.html'
})
export class VoteModalComponent {
  @Input() vote!: Vote;
  selectedOptionId: number | null = null

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private voteService: VoteService,
  ) { }


  submitVote() {
    if (this.selectedOptionId) {
      this.voteService.submitVote(
        this.vote.id,
        this.selectedOptionId,
      ).subscribe({
        next: (response) => {
          console.log('Vote submitted successfully', response);
          this.activeModal.close('submitted');
        },
        error: (err) => {
          console.error('Error submitting vote', err);
        }
      })
    }
  }

  onOptionSelected(optionId: number): void {
    this.selectedOptionId = optionId;
  }

  openDescriptionModal() {
    const modalRef = this.modalService.open(VoteDescriptionModalComponent);
    modalRef.componentInstance.description = this.vote.topicDescription;
  }
}
