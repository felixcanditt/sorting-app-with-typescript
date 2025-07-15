export class NumbersCollection {
  constructor(public myData: number[]) {}

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
