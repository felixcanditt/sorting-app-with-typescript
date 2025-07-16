import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([1, 388, -5, 0]);
numbersCollection.sort();
console.log(1, numbersCollection.myData);

const charactersCollection = new CharactersCollection('Xajgjj');
charactersCollection.sort();
console.log(charactersCollection.myData);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(7);
linkedList.add(1000);
linkedList.sort();
linkedList.print();
