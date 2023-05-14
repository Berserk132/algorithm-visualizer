import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
})
export class SortingComponent implements OnDestroy, OnInit {
  selectedTabId: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onTabChange(event: any): void {
    this.selectedTabId = event.index;
  }

  ngOnDestroy(): void {
  }
}
