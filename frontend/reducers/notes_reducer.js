import {KEY_PRESSED, KEY_RELEASED} from '../actions/notes_actions';
import {NOTE_NAMES} from '../util/tones';

const notesReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type){
    case KEY_PRESSED:
    let idx = oldState.indexOf(action.key);
      if (idx === -1 && NOTE_NAMES.includes(action.key)) {
        return [
        ...oldState,
        action.key
      ];} else {
        return oldState;
      }
    case KEY_RELEASED:
    let jdx = oldState.indexOf(action.key);
     if (jdx !== -1 && NOTE_NAMES.includes(action.key)) {
         return [
             ...oldState.slice(0, jdx),
             ...oldState.slice(jdx + 1)
         ];
     } else {
       return oldState;
     }
    default: return oldState;
  }
};

export default notesReducer;
