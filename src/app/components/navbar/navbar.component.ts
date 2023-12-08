import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  path: string;
  icon?: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { path: '/', title: 'Home', icon: 'home' },
    { path: '/friends', title: 'Friends', icon: 'group' },
    { path: '/map', title: 'Map', icon: 'map' },
    { path: '/profile', title: 'Profile', icon: 'person' },
  ];
}
