import { Component, Input, OnInit } from '@angular/core';
import { DfaService } from 'src/app/services/core/dfa.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {

  services = [];
  envTypes = [];

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
    this.dfaService.getEnvConfig().subscribe((response: any) => {
      this.services = response.SERVCIES;
      this.envTypes = response.ENV_TYPES;
      // this.initialize();
    })
  }

  createService() {
    console.log('click create env')
    console.log(this.doc);
    const { name, envType, ssl, cluster } = this.doc;
    if (!name) {
      const msg = 'Please select a service';
      alert(msg);
      throw new Error(msg);
    }
    if (!envType) {
      const msg = 'Environment Type is a required field';
      alert(msg);
      throw new Error(msg);
    }
    const data = {
      name,
      envType,
      ssl: ssl || false,
      cluster: cluster || false
    };
    console.log(this.submitHandler, 'submitting in c');
    if (typeof this.submitHandler === 'function') {
      return this.submitHandler({
        model: 'Service',
        body: data,
        method: 'create'
      });
    }
    this.dfaService.create('Service', { body: data }).subscribe((response) => {
      console.log('create service result', response);
    });
  }

}
