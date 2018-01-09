import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavlayoutRoutingModule } from './topnavlayout-routing.module';
import { TopnavlayoutComponent } from './topnavlayout.component';

@NgModule({
  imports: [
    CommonModule,
    TopnavlayoutRoutingModule
  ],
  declarations: [TopnavlayoutComponent]
})
export class TopnavlayoutModule { }
