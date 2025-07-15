import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1, 388, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(1, numbersCollection.myData);
