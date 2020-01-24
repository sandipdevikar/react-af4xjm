import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import 'bootstrap/dist/css/bootstrap.css'
import './style.css';
import store from './store/store';
import {Provider} from 'react-redux';
import ContactList from './components/ContactList'
class App extends Component {
  constructor() {
    super();
  
  }

  render() {
    return (
      <Provider store={store}>
      <ContactList/>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
