import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import configureStore from './store/store';
import Note from './util/note.js';
import Root from './components/root';

// window.Note = new Note(700);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store; 
  const rootEl = document.getElementById('root');
  ReactDOM.render(< Root store={store} />, rootEl); // for testing
});
