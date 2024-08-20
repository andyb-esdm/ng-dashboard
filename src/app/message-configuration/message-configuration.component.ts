import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-configuration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-configuration.component.html',
  styleUrl: './message-configuration.component.scss'
})
export class MessageConfigurationComponent {
  @Input({ required: true }) message!: string;
  readonly modal = inject(NgbActiveModal);

  onSubmit() {
    this.modal.close(this.message);
  }

}
