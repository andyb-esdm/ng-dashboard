import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  readonly contentKey = 'not-found';
  readonly content$ = inject(ContentService).getContent(this.contentKey);
}
