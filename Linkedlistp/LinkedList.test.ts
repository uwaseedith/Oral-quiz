import LinkedList from './LinkedList';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  test('should add elements to the list', () => {
    list.add(10);
    list.add(20);
    expect(list.find(10)).not.toBeNull();
    expect(list.find(20)).not.toBeNull();
  });

  test('should remove elements from the list', () => {
    list.add(10);
    list.add(20);
    expect(list.remove(20)).toBe(true);
    expect(list.find(20)).toBeNull();
  });

  test('should return null if element is not found', () => {
    expect(list.find(100)).toBeNull();
  });
});
