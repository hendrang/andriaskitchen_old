import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {
  private baseUrl: string = 'http://kantin.azurewebsites.net/api/Menu/Details/';
  title = 'Andria\'s Kitchen';

  constructor(private http: Http) {
  }

  // www.angulartypescript.com/angular-2-http-example-typescript/
  getMenu() {
    return this.http.get(this.baseUrl + '1')
    .map(response => response.json());
  }
  // getMenu() {
  //   this.http.get(this.baseUrl + '1')
  //   .map((res: Response) => res.json())
  //   .subscribe(
  //       data => { this.menu = data.Items; },
  //       err => console.error(err),
  //       () => console.log('done')
  //     );
  // }

  // private getHeaders(){
  //   let headers = new Headers();
  //   headers.append('Accept', 'application/json');
  //   return headers;
  // }

}
