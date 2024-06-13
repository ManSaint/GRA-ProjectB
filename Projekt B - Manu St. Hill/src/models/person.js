import { uniqueId } from '../services/seido-helpers';

export default function Person() {

    this.id = undefined;
    this.firstName = undefined;
    this.lastName = undefined;
    this.birthDate = undefined;
    this.email = undefined;
  
    this.address = {};
    this.address.country = undefined;
    this.address.city = undefined;
    this.address.street = undefined;
    this.address.zipCode = undefined;
  
  }
  
  Person.prototype = {
    
    seed: function (_sgen) {
      const p = new Person();
      p.id = uniqueId();
      p.firstName = _sgen.firstName;
      p.lastName = _sgen.lastName;
      p.birthDate = _sgen.dateAndTime(1970, 2000).toLocaleDateString('sv-SE');
      p.email = _sgen.email(p.firstName, p.lastName)
  
      p.address.country = _sgen.country;
      p.address.city = _sgen.city(p.address.country);
      p.address.street = _sgen.street(p.address.country);
      p.address.zipCode = _sgen.zipCode;
  
      return p;
    },
    
    seedMany: function (_sgen, nrOfItems) {
      return _sgen.toArray(nrOfItems, this.createRandom)
    }
  }