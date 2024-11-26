import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TaskB } from '../../inbox.component';
import { BadgeComponent } from 'src/app/shared/components/badge/badge.component';

@Component({
  selector: '[table-inbox-row]',
  standalone: true,
  imports: [FormsModule, AngularSvgIconModule, BadgeComponent],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
})
export class TableInboxRowComponent {
  @Input() task: TaskB = <TaskB>{};

  constructor() {}
}
