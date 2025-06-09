import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Vote } from 'src/app/models/vote.model';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-vote-modal',
  templateUrl: './vote-modal.component.html'
})
export class VoteModalComponent {
  @Input() vote!: Vote;
  selectedOptionId: number | null = null

  constructor(
    public activeModal: NgbActiveModal,
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
}
