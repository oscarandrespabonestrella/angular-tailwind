import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'NAVIGATION',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/home.svg',
          label: 'Home',
          route: '/dashboard',
        },
        {
          icon: 'assets/icons/heroicons/outline/inbox.svg',
          label: 'Open task',
          route: '/',
        },
        {
          icon: 'assets/icons/heroicons/outline/clock.svg',
          label: 'Upcoming task',
          route: '/',
        },
        {
          icon: 'assets/icons/heroicons/outline/clipboard-document-check.svg',
          label: 'Completed task',
          route: '/',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-text.svg',
          label: 'Received documents',
          route: '/',
        },
        {
          icon: 'assets/icons/heroicons/outline/bookmark.svg',
          label: 'My Follow up',
          route: '/',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'My folders',
          route: '/',
        },
        {
          icon: 'assets/icons/heroicons/outline/home-modern.svg',
          label: 'My entity',
          route: '/',
        },
      ],
    },

    {
      group: 'QUICK ACTIONS',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/arrow-right-end-on-rectangle.svg',
          label: 'Create Incoming Document',
          route: '/',
        },
        {
          icon: 'assets/icons/heroicons/outline/arrow-right-start-on-rectangle.svg',
          label: 'Create Outgoing Document',
          route: '/',
        },
        {
          icon: 'assets/icons/heroicons/outline/user.svg',
          label: 'Add delegation',
          route: '/',
        },
      ],
    },
  ];
}
