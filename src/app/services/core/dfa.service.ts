import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DfaService {

  root = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  refreshBuild() {
    const url = `${this.root}/refresh`;
    this.http.get(url).subscribe((response) => {
      console.log(response);
    });
  }
}
