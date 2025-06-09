import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vote-description-modal',
  templateUrl: './vote-description-modal.component.html',
  styleUrls: ['./vote-description-modal.component.css']
})
export class VoteDescriptionModalComponent {
  @Input() description!: string;
  selectedOptionId: number | null = null

  constructor(
    public activeModal: NgbActiveModal,
  ) { }
}
