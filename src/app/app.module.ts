import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard/dashboard1/dashboard1.component';
import { UielementsComponent } from './dashboard/uielements/uielements.component';
import { AccordionComponent } from './dashboard/uielements/accordion/accordion.component';
import { AlertComponent } from './dashboard/uielements/alert/alert.component';
import { ButtonsComponent } from './dashboard/uielements/buttons/buttons.component';
import { CarouselComponent } from './dashboard/uielements/carousel/carousel.component';
import { CollapseComponent } from './dashboard/uielements/collapse/collapse.component';
import { ProgressbarComponent } from './dashboard/uielements/progressbar/progressbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TopnavlayoutComponent } from './topnavlayout/topnavlayout.component';
import { GraphsComponent } from './dashboard/graphs/graphs.component';
import { TopnavComponent } from './dashboard/topnav/topnav.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { GridComponent } from './dashboard/grid/grid.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { DatatablesComponent } from './dashboard/tables/datatables/datatables.component';
import {DataTableModule} from "angular2-datatable";
import { RegtablesComponent } from './dashboard/tables/regtables/regtables.component';
import { routing } from './app.routes';
import { ChartsModule } from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LicenseComponent } from './dashboard/license/license.component';
import { License1Component } from './dashboard/license1/license1.component';
import { License2Component } from './dashboard/license2/license2.component';
import { License3Component } from './dashboard/license3/license3.component';
import { License4Component } from './dashboard/license4/license4.component';
import { License5Component } from './dashboard/license5/license5.component';
import { License6Component } from './dashboard/license6/license6.component';
import { AgentComponent } from './dashboard/agent/agent.component';
import { Agent1Component } from './dashboard/agent1/agent1.component';
import { Agent2Component } from './dashboard/agent2/agent2.component';
import { Agent3Component } from './dashboard/agent3/agent3.component';
import { Agent4Component } from './dashboard/agent4/agent4.component';
import { PolicyComponent } from './dashboard/policy/policy.component';
import { Policy1Component } from './dashboard/policy1/policy1.component';
import { Policy2Component } from './dashboard/policy2/policy2.component';
import { Policy3Component } from './dashboard/policy3/policy3.component';
import { Policy4Component } from './dashboard/policy4/policy4.component';
import { AGdashboardComponent } from './agdashboard/agdashboard.component';
import { NavigationComponent } from './agdashboard/navigation/navigation.component';
import { SidenavigationComponent } from './agdashboard/sidenavigation/sidenavigation.component';
import { AgfooterComponent } from './agdashboard/agfooter/agfooter.component';
import { InitialComponent } from './agdashboard/initial/initial.component';
import { AgencyeditComponent } from './agdashboard/agencyedit/agencyedit.component';
import { AgentagComponent } from './agdashboard/agentag/agentag.component';
import { PolicyagComponent } from './agdashboard/policyag/policyag.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    Dashboard1Component,
    GraphsComponent,
    TopnavComponent,
    SidenavComponent,
    LayoutComponent,
    GridComponent,
    TablesComponent,
    DatatablesComponent,
    RegtablesComponent,
    UielementsComponent,
    AccordionComponent,
    AlertComponent,
    ButtonsComponent,
    CarouselComponent,
    CollapseComponent,
    ProgressbarComponent,
    TopnavlayoutComponent,
    FooterComponent,
    FormsComponent,
    LicenseComponent,
    License1Component,
    License2Component,
    License3Component,
    License4Component,
    License5Component,
    License6Component,
    AgentComponent,
    Agent1Component,
    Agent2Component,
    Agent3Component,
    Agent4Component,
    PolicyComponent,
    Policy1Component,
    Policy2Component,
    Policy3Component,
    Policy4Component,
    AGdashboardComponent,
    NavigationComponent,
    SidenavigationComponent,
    AgfooterComponent,
    InitialComponent,
    AgencyeditComponent,
    AgentagComponent,
    PolicyagComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    ChartsModule,
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
