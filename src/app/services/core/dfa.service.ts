import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelRouteMap } from 'src/app/seed/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DfaService {

  root = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  refreshBuild() {
    const url = `${this.root}/refresh`;
    return this.http.get(url);
  }

  getEnvConfig() {
    const url = `${this.root}/env-config`;
    return this.http.get(url);
  }

  private __request(model: string, method: string, opts?: any) {
    const suffix = modelRouteMap[model];
    const url = `${this.root}/${suffix}`;
    const { body = {} } = opts || {};
    console.log('requesting', url, method, body);
    switch (method) {
      case 'create': {
        return this.http.post(url, body);
      }
      case 'read': {
        return this.http.get(url);
      }
      case 'update': {
        return this.http.patch(url, body);
      }
      case 'delete': {
        return this.http.delete(url);
      }
      default: {
        throw new Error('Invalid method');
      }
    }
  }

  create(model: string, opts: any) {
    return this.__request(model, 'create', opts);
  }
  read(model: string, opts: any) {
    return this.__request(model, 'read', opts);
  }
  update(model: string, opts: any) {
    return this.__request(model, 'update', opts);
  }
  delete(model: string, opts: any) {
    return this.__request(model, 'delete', opts);
  }
}
