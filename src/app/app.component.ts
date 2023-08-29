import { Component } from '@angular/core';
import { ClientService } from './service/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-client-app';

  constructor(private clientService: ClientService) {}

  exportToExcel() {
    this.clientService.exportToExcel().subscribe((response) => {
      console.log(response);
      this.downloadFile(response);
    });
  }
  downloadFile(data: any) {
    const blob = new Blob([data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;',
    });

    let link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'CLient-List.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
