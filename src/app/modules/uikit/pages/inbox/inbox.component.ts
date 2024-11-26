import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TableActionComponent } from '../table/components/table-action/table-action.component';

import { TableInboxHeaderComponent } from './components/table-header/table-header.component';
import { TableInboxFooterComponent } from './components/table-footer/table-footer.component';
import data from '../../../../../assets/task-list.json';
import { TableInboxRowComponent } from './components/table-row/table-row.component';
import { TableInboxActionComponent } from './components/table-action/table-action.component';
import { PaginationPipe } from 'src/app/shared/pipes/pagination.pipe';

export interface TaskB {
  name: string;
  type: string;
  background: string;
  color: string;
  icon: string;
  description: string;
}
@Component({
  standalone: true,
  imports: [
    AngularSvgIconModule,
    FormsModule,
    TableInboxHeaderComponent,
    TableInboxFooterComponent,
    TableInboxRowComponent,
    TableInboxActionComponent,
    PaginationPipe,
  ],
  templateUrl: './inbox.component.html',
})
export class InboxComponent {
  tasks: TaskB[] = data.tasklist;
  currentPage = 1;
  itemsPerPage = 10;

  onPageChange(page: number) {
    this.currentPage = page;
  }
}
