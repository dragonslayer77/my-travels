import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Travels from "./travels";
import Travel from "./travel";

import '../assets/stylesheets/application.scss';

const App = () => {
  return (
    <Fragment>
      <Travels />
    </Fragment>
  );
};

export default App;

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
