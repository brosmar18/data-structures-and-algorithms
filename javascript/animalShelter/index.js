'use strict';

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}

class AnimalShelter {
    constructor() {
      this.dogs = [];
      this.cats = [];
    }
  
    enqueue(animal) {
      if (animal.species.toLowerCase() === 'dog') {
        this.dogs.push(animal);
      } else if (animal.species.toLowerCase() === 'cat') {
        this.cats.push(animal);
      }
    }
  
    dequeue(pref) {
      let preference = pref.toLowerCase();
      if (preference === 'dog' && this.dogs.length > 0) {
        return this.dogs.shift();
      } else if (preference === 'cat' && this.cats.length > 0) {
        return this.cats.shift();
      } else {
        return null;
      }
    }
  }

module.exports = { AnimalShelter, Animal }
