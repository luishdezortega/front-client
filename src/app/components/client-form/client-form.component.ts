import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  profileForm: FormGroup;
  clientList: any

  constructor(private clientService: ClientService) {
    this.profileForm = new FormGroup({
      name: new FormControl('', []),
      phone: new FormControl('', [Validators.pattern('[0-9]{10}')]),
      email: new FormControl('', [Validators.email]),
      startDate: new FormControl('', []),
      endDate: new FormControl('', []),
    });
  }
  ngOnInit(): void {
    this.getClients();
  }

  saveClient() {
    console.log(this.profileForm.value);
    this.clientService
      .saveClient(this.profileForm.value)
      .subscribe((saveClientResponse) => {
        this.getClients();
        console.log(saveClientResponse);
      });
  }

  getClients() {
    console.log(this.profileForm.value);
    this.clientService.getClients().subscribe((allClientResponse) => {
      this.clientList = allClientResponse;
    });
  }
}
