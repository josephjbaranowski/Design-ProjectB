import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UielementsRoutingModule } from './uielements-routing.module';
import { UielementsComponent } from './uielements.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RatingComponent } from './rating/rating.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    UielementsRoutingModule
  ],
  declarations: [UielementsComponent, AccordionComponent, AccordionComponent, AlertComponent, ButtonsComponent, CollapseComponent, DatepickerComponent, DropdownComponent, ModalComponent, PaginationComponent, PopoverComponent, ProgressbarComponent, RatingComponent, TabsComponent, TooltipComponent, CarouselComponent]
})
export class UielementsModule { }
