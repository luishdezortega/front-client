import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  saveClient(client: Client) {
    return this.http.post('http://localhost:8080/api/client', client);
  }

  getClients() {
    return this.http.get('http://localhost:8080/api/clients');
  }
}
