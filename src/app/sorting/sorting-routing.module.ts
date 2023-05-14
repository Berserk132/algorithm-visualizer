import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SortingComponent } from './sorting.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'sorting-visualize',
      component: SortingComponent,
    },
  ])],
  exports: [RouterModule]
})
export class SortingRoutingModule { }
