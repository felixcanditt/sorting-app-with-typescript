"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(myData) {
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
