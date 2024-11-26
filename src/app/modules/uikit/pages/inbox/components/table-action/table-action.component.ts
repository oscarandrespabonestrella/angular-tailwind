import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TableInboxFilterService } from '../../services/table-filter.service';
import { MultiSelectComponent } from 'src/app/shared/components/multi-select/multi-select.component';

@Component({
  selector: 'table-inbox-action',
  standalone: true,
  imports: [AngularSvgIconModule, MultiSelectComponent],
  templateUrl: './table-action.component.html',
})
export class TableInboxActionComponent {
  @Input() itemsPerPage: number = 0;
  @Input() total: number = 0;

  constructor(public filterService: TableInboxFilterService) {}

  onSearchChange(value: Event) {
    const input = value.target as HTMLInputElement;
    this.filterService.searchField.set(input.value);
  }

  onStatusChange(value: Event) {
    const selectElement = value.target as HTMLSelectElement;
    this.filterService.statusField.set(selectElement.value);
  }

  onOrderChange(value: Event) {
    const selectElement = value.target as HTMLSelectElement;
    this.filterService.orderField.set(selectElement.value);
  }
}
