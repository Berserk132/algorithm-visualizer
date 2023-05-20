import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BubbleSortComponent {
  title = 'algorithm-visualizer';
  svg: any;
  elements = [];
  maxHeight = 250
  maxNumber = 80
  currentX = 100;
  value = 10;
  // DOM
  btnSort = document.getElementById('btn-sort')
  delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  constructor() {
  }
  ngOnInit(): void {
    this.drawColumns();
  }

  drawColumns() {
    let sortContainer: HTMLElement | null = document.getElementById('sort-container');
    let elementWidth = 100.0 / this.value;
    let elementHeight = 100.0 / this.value;
    sortContainer.innerHTML = '';
    for (let i = 0; i < this.value; i++) {
      var element = document.createElement('div');
      element.classList.add('element');
      element.style.width = `${elementWidth}%`;
      element.style.height = `${elementHeight}%`;
      element.style.background = `linear-gradient(0deg, rgba(22,22,22,1) 5%, rgba(210,210,210,1) 100%)`;

      sortContainer.appendChild(element);
      this.elements.push(element);

      elementHeight += elementWidth;
    }

    this.randomizeColumns();
  }

  async randomizeColumns() {
    for (let i = 0; i < this.elements.length; i++) {
      let rand_index = Math.floor(Math.random() * this.elements.length);
      await this.swap(i, rand_index, 50);
    }

  }

  async swap(i, j, delay) {
    this.changeColor(i, 'red');
    this.changeColor(j, 'green');

    [this.elements[i].style.height, this.elements[j].style.height] = [this.elements[j].style.height, this.elements[i].style.height];

    await this.delay(delay);

    this.resetColor(i, 'red');
    this.resetColor(j, 'green');
  }

  changeColor(i, color) {
    this.elements[i].classList.add(color);
  }

  resetColor(i, color) {
    this.elements[i].classList.remove(color);
  }

  async bubbleSort() {
    let len = this.elements.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        let first = this.elements[j].style.height;
        let second = this.elements[j + 1].style.height;
        if (parseFloat(first) > parseFloat(second)) {
          await this.swap(j, j + 1, 20);
        }
      }
    }
  };
}
