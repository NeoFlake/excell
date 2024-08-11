import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { PathConstantes } from "../constantes/path";

export class NavbarModel {

    constructor(private router: Router){}

    private navbarItems: MenuItem[] = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => this.router.navigate([PathConstantes.HOME]),
        },
        {
          label: 'Projects',
          icon: "pi pi-warehouse",
          items: [
            {
              label: "Excell",
              icon: "pi pi-file-excel",
              command: () => this.router.navigate([PathConstantes.MAIN])
            }
          ]
        },
        {
          label: 'Contact',
          icon: 'pi pi-envelope',
          command: () => this.router.navigate([PathConstantes.CONTACT])
        }
    ];

    public getNavbarItems(): MenuItem[] {
        return this.navbarItems;
    }
}