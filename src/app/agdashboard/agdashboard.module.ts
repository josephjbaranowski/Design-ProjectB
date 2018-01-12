import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AGdashboardRoutingModule } from './agdashboard-routing.module';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PopoverModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AGdashboardComponent } from './agdashboard.component';
import { AgencyeditComponent } from './agencyedit/agencyedit.component';
import { AgfooterComponent } from './agfooter/agfooter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { AgentagComponent } from './agentag/agentag.component';
import { PolicyagComponent } from './policyag/policyag.component';
import { InitialComponent } from './initial/initial.component';
import { Agentag1Component } from './agentag1/agentag1.component';


@NgModule({
  imports: [
    CommonModule,
    AGdashboardRoutingModule,
    ModalModule,
    PopoverModule,
  ],
  declarations: [AGdashboardComponent, NavigationComponent, SidenavigationComponent, AgfooterComponent, AgencyeditComponent, AgentagComponent, InitialComponent, PolicyagComponent, Agentag1Component]
})
export class DashboardModule { }
