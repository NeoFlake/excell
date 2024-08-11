import { Component } from '@angular/core';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { MenuItem } from 'primeng/api';
import { NavbarModel } from '../../models/navbar.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavHeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  public navbarModele: NavbarModel;

  public navbarItems: MenuItem[] | undefined;

  constructor(private router: Router){
    this.navbarModele = new NavbarModel(router);
    this.navbarItems = this.navbarModele.getNavbarItems();
  }

}
