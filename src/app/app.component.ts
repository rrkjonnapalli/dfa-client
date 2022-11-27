import { Component, OnInit } from '@angular/core';
import { DfaService } from './services/core/dfa.service';
import { TitleService } from './services/shared/title.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DFA';

  utils: any = {};
  createEnvHandler = this.onSubmit.bind(this);
  environments: any = [];
  services: any = [];



  constructor(private ts: TitleService, private dfaService: DfaService) { }

  ngOnInit(): void {
    this.ts.setTitle(this.title);
    const createEnvModel = new bootstrap.Modal('#createEnvModel');
    this.utils.createEnvModel = createEnvModel;
    // this.utils.createEnvModel.
    this.loadServices();
  }

  loadEnvironments() {
    this.dfaService.read('Env', {}).subscribe((response: any) => {
      console.log('load env', response);
      if (Array.isArray(response)) {
        this.environments = response.map((row: any) => {
          try {
            row.services = JSON.parse(row.def).map((s: any) => s.name);
            if (row.services.length > 8) {
              row.services = row.services.slice(0, 8);
              row.more = true;
            }
          } catch (error) {
            row.services = [];
          }
          return row;
        });
      }
    });
  }
  loadServices() {
    this.dfaService.read('Service', {}).subscribe((response: any) => {
      console.log('load services', response);
      if (Array.isArray(response)) {
        this.services = response;
      }
    });
  }

  refreshBuild(): void {
    this.dfaService.refreshBuild().subscribe((response) => {
      console.log('refresh build', response);
    });
  }

  deploy(env: any): void {
    env.deploying = true;
    console.log('deploying', env);
  }

  onSubmit(input: any) {
    console.log('submitting', input);
    const { body, model } = input;
    this.dfaService.create(model, { body }).subscribe((response) => {
      console.log('onSubmit result', response);
      this.toggleModel();
      this.loadServices();
    });
  }

  toggleModel(): void {
    console.log('open model');
    this.utils.createEnvModel.toggle();
  }
}
