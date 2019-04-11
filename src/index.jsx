import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Travel from "./travel";

import '../assets/stylesheets/application.scss';

const App = () => {
  return (
    <Fragment>
      <Travel
      destination = 'Lisbon'
      country = 'Portugal'
      distance = '8723'
      photo ='https://picsum.photos/200/300/?random'
      />
      <Travel
      destination = 'Paris'
      country = 'France'
      distance = '723874'
      photo ='https://picsum.photos/200/300/?random'
      />
    </Fragment>
  );
};

export default App;

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
