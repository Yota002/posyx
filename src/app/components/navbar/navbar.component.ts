import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  path: string;
  isExternal?: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    { path: '/', title: 'Home' },
    { path: '/login', title: 'Login' },
    { path: '/register', title: 'Register' },
  ];
}
