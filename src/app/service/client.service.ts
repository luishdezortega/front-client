import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client, ClientListResponse } from '../interfaces/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  saveClient(client: Client) {
    return this.http.post('http://localhost:8080/api/client', client);
  }

  getClients(pageSize = 10, page = 0) {
    return this.http.get<ClientListResponse>(
      `http://localhost:8080/api/clients?pageSize=${pageSize}&page=${page}`
    );
  }

  findBySharedKey(sharedKey: string) {
    return this.http.get<Client>(
      `http://localhost:8080/api/clients/${sharedKey}`
    );
  }

  exportToExcel() {
    return this.http.get('http://localhost:8080/api/export', {
      responseType: 'blob',
    });
  }
}
