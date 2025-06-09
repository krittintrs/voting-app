import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrls: ['./create-vote.component.css']
})
export class CreateVoteComponent {
  voteForm: FormGroup;
  maxTopicName = 100;
  maxTopicDesc = 1000;

  constructor(
    private voteService: VoteService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.voteForm = this.formBuilder.group({
      topicName: ['', [Validators.required, Validators.maxLength(this.maxTopicName)]],
      topicDescription: ['', [Validators.required, Validators.maxLength(this.maxTopicDesc)]],
      options: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required])
      ])
    })
  }

  get options(): FormArray {
    return this.voteForm.get('options') as FormArray;
  }

  addOption() {
    this.options.push(this.formBuilder.control('', Validators.required));
  }

  removeOption(index: number) {
    if (this.options.length > 1) {
      this.options.removeAt(index);
    }
  }

  submitVote() {
    if (this.voteForm.valid) {
      const payload = {
        topicName: this.voteForm.value.topicName,
        topicDescription: this.voteForm.value.topicDescription,
        options: this.voteForm.value.options.map((name: string) => ({ optionName: name }))
      };

      console.log('Submitting vote:', payload);
      this.voteService.createVote(payload).subscribe(() => {
        this.router.navigate(['/home']);
      })
    }
  }
}
