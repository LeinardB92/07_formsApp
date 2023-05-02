import { Component } from '@angular/core';

interface menuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  reactiveMenu: menuItem[] = [
    {title: 'Básicos', route: './reactive/basic'},
    {title: 'Dinámicos', route: './reactive/dynamic'},
    {title: 'Switches', route: './reactive/switches'}
  ]

  authMenu: menuItem[] = [
    {title: 'Registro', route: './auth/register'}
  ]
}
