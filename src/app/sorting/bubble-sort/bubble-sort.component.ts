import { Component } from '@angular/core';
import * as d3 from "d3";
import { Element } from '../models/element.model';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss']
})
export class BubbleSortComponent {
  title = 'algorithm-visualizer';
  svg: any;
  elements: Element[] = [];
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
    this.elements = [];
    let elementWidth = 100.0 / this.value;
    let elementHeight = 100.0 / this.value;
    let leftValue = 0.0;
    sortContainer.innerHTML = '';
    for (let i = 0; i < this.value; i++) {
      // this.elements.push({
      //   width: `${elementWidth}%`,
      //   height: `${elementHeight}%`,
      //   left: `${leftValue}%`
      // });
      var element = document.createElement('div');
      element.classList.add('element');
      element.style.width = `${elementWidth}%`;
      // element.style.position = `absolute`;
      element.style.height = `${elementHeight}%`;
      // element.style.left = `${leftValue}%`;
      element.style.background = `linear-gradient(0deg, rgba(22,22,22,1) 5%, rgba(210,210,210,1) 100%)`;
      // element.style.bottom = `0`;
      // element.style.paddingRight = `2px`;
      sortContainer.appendChild(element);

      elementHeight += elementWidth;
      leftValue += elementWidth;
    }
  }



  async changeColors(first: any, second: any) {
    first.children[0].style['fill'] = 'red'
    second.children[0].style['fill'] = 'blue'
    await this.delay(20)
  }

  async SWAP(arr: any[], index: number) {

    let tmp = arr[index]
    arr[index] = arr[index + 1]
    arr[index + 1] = tmp

    await this.delay(20)

    arr[index].children[0].style['fill'] = 'grey'
    arr[index + 1].children[0].style['fill'] = 'grey'
  }

  getElementNumber(element: any) {

    return parseInt(element.children[1].innerHTML)
  }

  getPosition(element: any) {
    let tmp = element.getAttribute('transform')
    tmp = tmp.replace('translate(', '').replace(')', '').split(',')
    return tmp
  }

  runAlgo() {
    this.bubbleSort();
  }

  async bubbleSort() {
    let barsArr = document.getElementsByTagName('g')
    let gElements = []
    for (let i = 0; i < barsArr.length; i++) {

      gElements.push(barsArr[i])
    }
    let len = gElements.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        let first = this.getElementNumber(gElements[j])
        let second = this.getElementNumber(gElements[j + 1])
        if (first > second) {
          let firstPosition = this.getPosition(gElements[j])
          let secondPosition = this.getPosition(gElements[j + 1])


          await this.changeColors(gElements[j], gElements[j + 1])

          gElements[j].setAttribute('transform', `translate(${parseInt(firstPosition[0]) + 50}, ${parseInt(firstPosition[1])})`)
          gElements[j + 1].setAttribute('transform', `translate(${parseInt(secondPosition[0]) - 50}, ${parseInt(secondPosition[1])})`)

          await this.SWAP(gElements, j)
        }
      }
    }
    return gElements;
  };
}
