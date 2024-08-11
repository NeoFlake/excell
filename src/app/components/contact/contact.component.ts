import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavbarModel } from '../../models/navbar.model';
import { Router } from '@angular/router';
import { NavHeaderComponent } from '../nav-header/nav-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public navbarModele: NavbarModel;

  public navbarItems: MenuItem[] | undefined;

  constructor(private router: Router){
    this.navbarModele = new NavbarModel(router);
    this.navbarItems = this.navbarModele.getNavbarItems();
  }

}
