import { Component, Input, OnInit } from '@angular/core';
import { DfaService } from 'src/app/services/core/dfa.service';

@Component({
  selector: 'app-create-env',
  templateUrl: './create-env.component.html',
  styleUrls: ['./create-env.component.scss']
})
export class CreateEnvComponent implements OnInit {


  services = [
    'Kafka',
    'Zookeeper',
    'ELK',
    'Kibana',
    'Nifi',
    'MongoDB',
    'MySQL',
    'Postgres',
    'Keycloak'
  ];

  @Input() submitHandler: any = null;



  doc: any = {};


  constructor(private dfaService: DfaService) { }

  initialize() {
    this.doc = {
      services: this.services.map((name) => ({
        name,
        enabled: false,
        isProduction: false,
        ssl: false
      }))
    };
  }

  ngOnInit(): void {
    this.initialize();
  }

  createEnv() {
    console.log('click create env')
    console.log(this.doc);
    const services = this.doc.services.filter((v: any) => v.enabled);
    if (!services.length) {
      const msg = 'Please select some services';
      alert(msg);
      throw new Error(msg)
    }
    const { title } = this.doc;
    if (!title || !title.trim()) {
      const msg = 'Environment name is a required field';
      alert(msg);
      throw new Error(msg);
    }
    const data = {
      name: this.doc.title,
      code: this.doc.code,
      def: JSON.stringify(services)
    };
    console.log(this.submitHandler, 'submitting in c');
    if (typeof this.submitHandler === 'function') {
      return this.submitHandler({
        model: 'Env',
        body: data,
        method: 'create'
      });
    }
    this.dfaService.create('Env', { body: data }).subscribe((response) => {
      console.log('create env result', response);
    });
  }

}
