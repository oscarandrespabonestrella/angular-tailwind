import { Component, Input } from '@angular/core';

@Component({
  selector: '[dashboard-card]',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-card.component.html',
})
export class DashboardCardComponent {
  @Input() buttons: { [key: string]: string }[] = [];
  @Input() title = '';
}
