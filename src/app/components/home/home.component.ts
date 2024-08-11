import { Component } from '@angular/core';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { PathConstantes } from '../../constantes/path';
import { NavbarModel } from '../../models/navbar.model';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NavHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public navbarModele: NavbarModel;

  public navbarItems: MenuItem[] | undefined;

  constructor(private router: Router){
    this.navbarModele = new NavbarModel(router);
    this.navbarItems = this.navbarModele.getNavbarItems();
  }

}
