import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  settings = environment.backend;

  constructor() { }

  getRoot() {
    const root = `${this.settings.protocol}://${this.settings.domain}`;
    if (this.settings.port) {
      return `${root}:${this.settings.port}/`
    } else {
      return `${root}/`;
    }
  }

  getEndpoint(path: string) {
    return `${this.getRoot()}${path.replace(/^\//g, '')}`;
  }


  
}
