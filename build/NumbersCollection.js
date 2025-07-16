"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(myData) {
        super();
        this.myData = myData;
    }
    get length() {
        return this.myData.length;
    }
    compare(leftIndex, rightIndex) {
        return this.myData[leftIndex] > this.myData[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.myData[leftIndex];
        this.myData[leftIndex] = this.myData[rightIndex];
        this.myData[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
