import LinkedList from './LinkedList';

const list = new LinkedList<number>();

console.log('Adding elements...');
list.add(10);
list.add(20);
list.add(30);
list.print();

console.log('Finding element 20...');
const foundNode = list.find(20);
if (foundNode) {
  console.log('Found:', foundNode.data);
} else {
  console.log('Element not found.');
}

console.log('Removing element 20...');
const isRemoved = list.remove(20);
console.log('Removed:', isRemoved);
list.print();

console.log('Removing element 100 (non-existent)...');
const isRemovedAgain = list.remove(100);
console.log('Removed:', isRemovedAgain);
list.print();
