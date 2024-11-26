import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Navigation',
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
          route: '/components/inbox',
        },
        {
          icon: 'assets/icons/heroicons/outline/clock.svg',
          label: 'Upcoming task',
          route: '/upcoming-task',
        },
        {
          icon: 'assets/icons/heroicons/outline/clipboard-document-check.svg',
          label: 'Completed task',
          route: '/completed-task',
        },
        {
          icon: 'assets/icons/heroicons/outline/document-text.svg',
          label: 'Received documents',
          route: '/received-documents',
        },
        {
          icon: 'assets/icons/heroicons/outline/bookmark.svg',
          label: 'My Follow up',
          route: '/follow-up',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'My folders',
          route: '/folders',
        },
        {
          icon: 'assets/icons/heroicons/outline/home-modern.svg',
          label: 'My entity',
          route: '/entity',
        },
      ],
    },

    {
      group: 'Quick actions',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/arrow-right-end-on-rectangle.svg',
          label: 'Create Incoming Document',
          route: '/create-document',
        },
        {
          icon: 'assets/icons/heroicons/outline/arrow-right-start-on-rectangle.svg',
          label: 'Create Outgoing Document',
          route: '/create-out-document',
        },
        {
          icon: 'assets/icons/heroicons/outline/user.svg',
          label: 'Add delegation',
          route: '/add-delegation',
        },
      ],
    },
  ];
}
