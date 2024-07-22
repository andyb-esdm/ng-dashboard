import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageConfigurationComponent } from '../message-configuration/message-configuration.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() message = 'this is the default message';

  private readonly modalService = inject(NgbModal);

  onConfigure() {
    const modalRef = this.modalService.open(MessageConfigurationComponent);
    modalRef.componentInstance.message = this.message;
    modalRef.result
      .then(
        (result) => {
          if (result) {
            this.message = result;
          }
        }
      )
      .catch(() => undefined);
  }

}
