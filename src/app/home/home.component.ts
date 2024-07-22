import { Component, inject } from '@angular/core';
import { ContentService } from '../content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly contentKey = 'home';
  readonly content$ = inject(ContentService).getContent(this.contentKey);
}
