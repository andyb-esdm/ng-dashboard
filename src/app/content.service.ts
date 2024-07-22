import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly content = new Map<string, string>([
    ['home', '<h2>Home</h2><p>This is the home page.</p>'],
    ['about', '<h2>About</h2><p>This is the about page.</p>'],
  ]);

  getContent(key: string): Observable<string | undefined> {
    return of(this.content.get(key));
  }
}
