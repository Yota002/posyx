import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  description?: string;
  path: string;
  icon?: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menuItems: MenuItem[] = [
    {
      path: '/friends',
      title: 'Friends',
      description: 'Add some friends',
      icon: 'group',
    },
    {
      path: '/map',
      title: 'Map',
      description: 'Find your friends position',
      icon: 'map',
    },
    {
      path: '/profile',
      title: 'Profile',
      description: 'Choose your style',
      icon: 'person',
    },
  ];
}
