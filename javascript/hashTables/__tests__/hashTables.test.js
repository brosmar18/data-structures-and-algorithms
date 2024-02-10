const Hashtable = require('../index'); 

describe('Hashtable', () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable();
  });

  test('Setting a key/value pair stores the value in the structure', () => {
    hashtable.set('testKey', 'testValue');
    expect(hashtable.get('testKey')).toBe('testValue');
  });

  test('Retrieving a value by key returns the correct value stored', () => {
    hashtable.set('anotherKey', 'anotherValue');
    expect(hashtable.get('anotherKey')).toBe('anotherValue');
  });

  test('Requesting a value for a non-existent key returns null', () => {
    expect(hashtable.get('nonExistentKey')).toBeNull();
  });

  test('Requesting all keys returns a collection of all unique keys', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    expect(hashtable.keys()).toEqual(expect.arrayContaining(['key1', 'key2']));
  });

  test('The hashtable can handle a collision and store multiple values at the same index, if necessary', () => {

    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    expect(hashtable.get('key1')).toBe('value1');
    expect(hashtable.get('key2')).toBe('value2');
  });

  test('A value stored in a bucket with a collision can be accurately retrieved', () => {

    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    expect(hashtable.get('key1')).toBe('value1');
    expect(hashtable.get('key2')).toBe('value2');
  });

  test('The hash function returns a valid index within the range of the underlying array structure for any given key', () => {
    const key = 'someKey';
    const index = hashtable.hash(key);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(hashtable.table.length);
  });
});
