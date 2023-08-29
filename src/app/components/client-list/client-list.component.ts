import { Component, OnInit } from '@angular/core';
import {
  Client
} from 'src/app/interfaces/client.interface';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  constructor(private clientService: ClientService) {}

  clientList: Client[] = [];

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe((clientResponse) => {
      this.clientList = clientResponse.responseDto;
      console.log(clientResponse);
    });
  }
}
