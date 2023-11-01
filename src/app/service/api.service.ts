import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDepartamento() {
    // return this.http.get(`${this.url}/admin-units`);
  }
}
