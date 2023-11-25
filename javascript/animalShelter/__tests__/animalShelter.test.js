const { AnimalShelter, Animal } = require('../index');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('Enqueue a Dog Named "Rex"', () => {
    shelter.enqueue(new Animal('Rex', 'dog'));
    expect(shelter.dogs).toEqual([new Animal('Rex', 'dog')]);
    expect(shelter.cats).toEqual([]);
  });

  test('Enqueue a Cat Named "Whiskers"', () => {
    shelter.enqueue(new Animal('Rex', 'dog'));
    shelter.enqueue(new Animal('Whiskers', 'cat'));
    expect(shelter.dogs).toEqual([new Animal('Rex', 'dog')]);
    expect(shelter.cats).toEqual([new Animal('Whiskers', 'cat')]);
  });

  test('Dequeue a Dog', () => {
    shelter.enqueue(new Animal('Rex', 'dog'));
    const dequeued = shelter.dequeue('dog');
    expect(dequeued).toEqual(new Animal('Rex', 'dog'));
    expect(shelter.dogs).toEqual([]);
    expect(shelter.cats).toEqual([]);
  });

  test('Dequeue a Cat', () => {
    shelter.enqueue(new Animal('Whiskers', 'cat'));
    const dequeued = shelter.dequeue('cat');
    expect(dequeued).toEqual(new Animal('Whiskers', 'cat'));
    expect(shelter.dogs).toEqual([]);
    expect(shelter.cats).toEqual([]);
  });

  test('Dequeue with No Preference', () => {
    const dequeued = shelter.dequeue();
    expect(dequeued).toBeNull();
  });

  test('Dequeue with Invalid Preference', () => {
    const dequeued = shelter.dequeue('rabbit');
    expect(dequeued).toBeNull();
  });

  test('Enqueue Multiple Animals and Dequeue with Preference', () => {
    shelter.enqueue(new Animal('Buddy', 'dog'));
    shelter.enqueue(new Animal('Whiskers', 'cat'));
    shelter.enqueue(new Animal('Luna', 'cat'));
    const dequeued = shelter.dequeue('cat');
    expect(dequeued).toEqual(new Animal('Whiskers', 'cat'));
    expect(shelter.dogs).toEqual([new Animal('Buddy', 'dog')]);
    expect(shelter.cats).toEqual([new Animal('Luna', 'cat')]);
  });

  test('Dequeue with Preference When Queue is Empty', () => {
    shelter.enqueue(new Animal('Buddy', 'dog'));
    const dequeued = shelter.dequeue('cat');
    expect(dequeued).toBeNull();
    expect(shelter.dogs).toEqual([new Animal('Buddy', 'dog')]);
    expect(shelter.cats).toEqual([]);
  });

  test('Dequeue with Preference When Queue has Multiple Animals', () => {
    shelter.enqueue(new Animal('Rex', 'dog'));
    shelter.enqueue(new Animal('Buddy', 'dog'));
    const dequeued = shelter.dequeue('dog');
    expect(dequeued).toEqual(new Animal('Rex', 'dog'));
    expect(shelter.dogs).toEqual([new Animal('Buddy', 'dog')]);
    expect(shelter.cats).toEqual([]);
  });
});
