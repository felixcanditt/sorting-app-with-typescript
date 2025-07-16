import { Sortable } from './Sorter';
import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public myData: number[]) {
    super();
  }

  get length(): number {
    return this.myData.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.myData[leftIndex] > this.myData[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.myData[leftIndex];
    this.myData[leftIndex] = this.myData[rightIndex];
    this.myData[rightIndex] = leftHand;
  }
}
