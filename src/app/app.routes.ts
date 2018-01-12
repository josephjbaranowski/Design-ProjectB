import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard1Component } from './dashboard/dashboard1/dashboard1.component';
import { UielementsComponent } from './dashboard/uielements/uielements.component';
import { AccordionComponent } from './dashboard/uielements/accordion/accordion.component';
import { ProgressbarComponent } from './dashboard/uielements/progressbar/progressbar.component';
import { AlertComponent } from './dashboard/uielements/alert/alert.component';
import { ButtonsComponent } from './dashboard/uielements/buttons/buttons.component';
import { CarouselComponent } from './dashboard/uielements/carousel/carousel.component';
import { CollapseComponent } from './dashboard/uielements/collapse/collapse.component';
import { LoginComponent } from './login/login.component';
import { TopnavlayoutComponent } from './topnavlayout/topnavlayout.component';
import { SignupComponent } from './signup/signup.component';
import { GraphsComponent } from './dashboard/graphs/graphs.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
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
import { GridComponent } from './dashboard/grid/grid.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { DatatablesComponent } from './dashboard/tables/datatables/datatables.component';
import { RegtablesComponent } from './dashboard/tables/regtables/regtables.component';
import { AGdashboardComponent } from './agdashboard/agdashboard.component';
import { NavigationComponent } from './agdashboard/navigation/navigation.component';
import { SidenavigationComponent } from './agdashboard/sidenavigation/sidenavigation.component';
import { AgfooterComponent } from './agdashboard/agfooter/agfooter.component';
import { InitialComponent } from './agdashboard/initial/initial.component';
import { AgencyeditComponent } from './agdashboard/agencyedit/agencyedit.component';
import { AgentagComponent } from './agdashboard/agentag/agentag.component';
import { PolicyagComponent } from './agdashboard/policyag/policyag.component';


export const routes: Routes = [
{
	 path: '',
	 component: LoginComponent
 },
 { path: 'agdashboard', component: AGdashboardComponent,
 children:[
	 { path: 'initial', component: InitialComponent},
		{ path: 'agencyedit', component: AgencyeditComponent },
		{ path: 'policyag', component: PolicyagComponent },
		{ path: 'agentag', component: AgentagComponent },
  ]
},
	 { path: 'dashboard', component: DashboardComponent,
	 children:[
	 { path: 'dashboard1', component: Dashboard1Component },
	  { path: 'policy', component: PolicyComponent },
		 { path: 'policy1', component: Policy1Component },
		  { path: 'policy2', component: Policy2Component },
			 { path: 'policy3', component: Policy3Component },
			  { path: 'policy4', component: Policy4Component },
	  { path: 'agent', component: AgentComponent },
		{ path: 'agent1', component: Agent1Component },
		{ path: 'agent2', component: Agent2Component },
		{ path: 'agent3', component: Agent3Component },
		{ path: 'agent4', component: Agent4Component },
	 { path: 'license', component: LicenseComponent },
	 { path: 'license1', component: License1Component },
	 { path: 'license2', component: License2Component },
	 { path: 'license3', component: License3Component },
	 { path: 'license4', component: License4Component },
	 { path: 'license5', component: License5Component },
	  { path: 'license6', component: License6Component },
	 	{ path: 'graphs', component: GraphsComponent },
		{ path: 'layout', component: LayoutComponent },
		{ path: 'grid', component: GridComponent },
		{ path: 'forms', component: FormsComponent },
	 ]
	 },
	 { path: 'login', component: LoginComponent },
	 { path: 'topnavlayout', component: TopnavlayoutComponent },
	  { path: 'signup', component: SignupComponent },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
