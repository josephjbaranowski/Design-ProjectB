import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { RegtablesComponent } from './regtables/regtables.component';

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule,
  ],
  declarations: [TablesComponent, DatatablesComponent, RegtablesComponent]
})
export class TablesModule { }
