class Sorter {
  // Version 1
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }

  // Version 2, refactoring
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const newSorter = new Sorter([10, 3, -5, 0]);
newSorter.sort();
console.log(newSorter.collection);
