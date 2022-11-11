import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/shared/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DFA';

  constructor(private ts: TitleService) { }

  ngOnInit(): void {
    this.ts.setTitle(this.title);
  }
}
