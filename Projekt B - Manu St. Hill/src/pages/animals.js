import React, {useState} from 'react';
import {seedGenerator } from '../services/seido-helpers';
import Animal from '../models/animal';
import AnimalForm from '../components/animal-form';
import { useParams } from 'react-router-dom';


export function Animals() {

    const props = useParams();
    const [animals, setAnimals] = useState([]);

    //React event bubbling, onSave and onUndo called from FormValidation05 (events upwards flow)
    const onSave = (e) => 
    {
      console.log (`onSave invoked`);
      
      console.log(e.animal); 

      const aCopy = JSON.parse(JSON.stringify(animals));
      aCopy.push(e.animal);

      setAnimals(aCopy);
    }  

    const onUndo = (e) => 
    {
      console.log (`onUndo invoked`);
    }  

    return (
      <>
       <AnimalForm animal={{name:props.name, type:props.type, age:props.age}} onSave={onSave} onUndo={onUndo}/>
       
        <ul>
            {animals.map((a) => <li>{a.name} the {a.type} is {a.age} years old</li>)}
        </ul>
      </>
    );
  }
