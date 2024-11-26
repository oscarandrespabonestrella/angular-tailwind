import { Component } from '@angular/core';
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card.component';
import { TagComponent } from 'src/app/shared/components/tag/tag.component';
import { DashboardButtonComponent } from '../../components/dashboard-button/dashboard-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardCardComponent, TagComponent, DashboardButtonComponent, AngularSvgIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  createButtons = [
    {
      title: 'Incoming document',
      description: 'Manage your files',
      icon: 'bi bi-file-earmark-arrow-up',
    },
    {
      title: 'Outgoing document',
      description: 'Track your projects',
      icon: 'bi bi-file-earmark-arrow-down',
    },
  ];
  gridItems = [
    {
      title: 'Create incoming document',
      description: 'Manage your files',
      icon: 'assets/icons/heroicons/outline/arrow-right-end-on-rectangle.svg',
    },
    {
      title: 'Create outgoing document',
      description: 'Track your projects',
      icon: 'assets/icons/heroicons/outline/arrow-right-start-on-rectangle.svg',
    },
    {
      title: 'Open task',
      description: 'lorem ipsum',
      icon: 'assets/icons/heroicons/outline/inbox.svg',
    },
    {
      title: 'Upcoming task',
      description: 'lorem ipsum',
      icon: 'assets/icons/heroicons/outline/clock.svg',
    },
    {
      title: 'Completed task',
      description: 'lorem ipsum',
      icon: 'assets/icons/heroicons/outline/clipboard-document-check.svg',
    },
    {
      title: 'Received documents',
      description: 'lorem ipsum',
      icon: 'assets/icons/heroicons/outline/document-text.svg',
    },
  ];
}
