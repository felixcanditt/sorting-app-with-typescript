import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([1, 388, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(1, numbersCollection.myData);

const charactersCollection = new CharactersCollection('Xajgjj');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.myData);
