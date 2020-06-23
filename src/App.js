import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputCreator from './component/common/input';
import {PickAType} from './component/common/formBuilder';

const formDeve = [
  {
  property: 'text'
},
  {
  property: 'integer'
},
  {
  property: 'Object'
},
]

function App() {
  return (
    <div className="App">
      <div>
        <form>
          {formDeve.map((fo, index) => (
<React.Fragment key={index}>
            <PickAType property={fo.property} />
            <br />
            </React.Fragment>
          ))} 
          {/* <PickAType property={"integer"} /> */}
        </form>
      </div>
    </div>
  );
}

export default App;
