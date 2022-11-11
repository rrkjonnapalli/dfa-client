import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
