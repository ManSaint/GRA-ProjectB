import { uniqueId, randomNumber } from '../services/seido-helpers';

export default function Animal() {

    this.id = undefined;
    this.name = undefined;
    this.type = undefined;
    this.age = undefined;
  }
  
  Animal.prototype = {
    
    seed: function (_sgen) {
      const a = new Animal();
      a.id = uniqueId();
      a.name = _sgen.petName;
      a.type = _sgen.fromString("Elephant, Lion, Tiger, Giraff, Zebra");
      a.age = randomNumber(1, 20);
      return a;
    },
    
    seedMany: function (_sgen, nrOfItems) {
      return _sgen.toArray(nrOfItems, this.createRandom)
    }
  }
