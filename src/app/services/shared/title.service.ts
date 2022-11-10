import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title) { }

  setTitle(name: string): void {
    this.title.setTitle(name);
  }
}
