import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public myData: string) {}

  get length(): number {
    return this.myData.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.myData[leftIndex].toLowerCase() >
      this.myData[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.myData.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.myData = characters.join('');
  }
}
