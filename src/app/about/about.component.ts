import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly contentKey = 'about';
  readonly content$ = inject(ContentService).getContent(this.contentKey);
}
