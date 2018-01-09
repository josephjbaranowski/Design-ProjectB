import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PopoverModule } from 'ng2-bootstrap/ng2-bootstrap';
import { InitialComponent } from './initial.component';
import { AGDashboardComponent } from './agdashboard.component';




@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ModalModule,
    PopoverModule,
  ],
  declarations: [AGDashboardComponent, NavigationComponent, SidenavigationComponent, AGFooterComponent]
})
export class DashboardModule { }
