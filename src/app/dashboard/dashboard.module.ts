import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PopoverModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DashboardComponent } from './dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout/layout.component';
import { GridComponent } from './grid/grid.component';
import { TablesComponent } from './tables/tables.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { UielementsComponent } from './uielements/uielements.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ModalModule,
    PopoverModule,
  ],
  declarations: [DashboardComponent, GraphsComponent, TopnavComponent, SidenavComponent, LayoutComponent, GridComponent, TablesComponent, Dashboard1Component, UielementsComponent, FooterComponent, FormsComponent]
})
export class DashboardModule { }
