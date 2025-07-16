"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(myData) {
        this.myData = myData;
    }
    get length() {
        return this.myData.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.myData[leftIndex].toLowerCase() >
            this.myData[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const characters = this.myData.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.myData = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
