"use strict";
class Sorter {
    // Version 1
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    // Version 2, refactoring
    //union type/operator: |
    // allows to use only features both number[] and string have in common
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // If collection is an array of numbers
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    // thats why here, ts error message explains that index signature only permits reading
                    // because in a string, you cant update an index with a new value
                    // so in this case, you cant do it with a number neither because of the union type
                    // union type only allows to use properties both types have, so index with read only in this case
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
                // if collection is a string
            }
        }
    }
}
const newSorter = new Sorter([10, 3, -5, 0]);
newSorter.sort();
console.log(newSorter.collection);
