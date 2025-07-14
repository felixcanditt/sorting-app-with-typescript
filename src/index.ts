class Sorter {
  constructor(public collection: number[] | string) {}
  // why is union type bad here? 
  // because wed need to update the potential types every time something new is added

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        if (typeof this.collection === 'string') {
          this.collection.
        }
      }
    }
  }
}

const newSorter = new Sorter([10, 3, -5, 0]);
newSorter.sort();
console.log(newSorter.collection);
