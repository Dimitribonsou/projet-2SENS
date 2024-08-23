import { Component } from '@angular/core';
import { SidebarComponent } from "../../Components/DashboardComponent/sidebar/sidebar.component";
import { HeaderBarComponent } from "../../Components/DashboardComponent/header-bar/header-bar.component";
import { AdminHomeComponent } from "../../Components/DashboardComponent/admin-home/admin-home.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, HeaderBarComponent, AdminHomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {

}
