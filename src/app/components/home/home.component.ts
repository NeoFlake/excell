import { Component } from '@angular/core';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NavHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public navbarItems: MenuItem[] | undefined;

  constructor(){
    this.defineNavBarItems();
  }

  private defineNavBarItems(): void {
    this.navbarItems = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      }
    ];
  }

}
