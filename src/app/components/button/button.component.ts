import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input('icon') icon: string = '';
  @Input('text') text: string = '';
  @Input('type') type: string = 'primary';
}
