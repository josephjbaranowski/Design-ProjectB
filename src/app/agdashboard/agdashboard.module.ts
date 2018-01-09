import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AGdashboardRoutingModule } from './agdashboard-routing.module';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PopoverModule } from 'ng2-bootstrap/ng2-bootstrap';
import { InitialComponent } from './initial/initial.component';
import { AGdashboardComponent } from './agdashboard.component';
import { AgencyeditComponent } from './agencyedit/agencyedit.component';
import { InitialComponent } from './initial/initial.component';
import { AgfooterComponent } from './agfooter/agfooter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';



@NgModule({
  imports: [
    CommonModule,
    AGdashboardRoutingModule,
    ModalModule,
    PopoverModule,
  ],
  declarations: [AGdashboardComponent, NavigationComponent, SidenavigationComponent, AgfooterComponent, AgencyeditComponent, InitialComponent]
})
export class DashboardModule { }
