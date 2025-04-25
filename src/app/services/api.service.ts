import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http: HttpClient = inject(HttpClient);

  urlRandomUser: string = 'https://randomuser.me/api/';
  urlCataas: string = "https://cataas.com/cat?json=true";

  constructor() { }

  getUser() {
    return this.http.get(this.urlRandomUser);
  }

  getCatImg(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlCataas).subscribe({
        next: (data: any) => {
          if (data.url)
            resolve(data.url);
        }, error: (err) => reject(err),
        complete: () => {}
      });
    });
  }
}
