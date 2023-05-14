import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { SortingComponent } from './sorting.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SortingRoutingModule } from './sorting-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SortingComponent,
    BubbleSortComponent
  ],
  imports: [
    CommonModule,
    SortingRoutingModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSliderModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class SortingModule { }
