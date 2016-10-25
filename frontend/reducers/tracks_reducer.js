import {START_RECORDING, STOP_RECORDING, ADD_NOTES} from '../actions/track_actions';
import {merge} from 'lodash/merge';

const currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case START_RECORDING:

      const newState = merge(state, {});
      newState[currTrackId] = {id: currTrackId++, name: `Track ${currTrackId}`, roll: [], timeStart:  action.timeNow};
      return { newState };
    case STOP_RECORDING:
      return;
    default:
      return state;
  }
};

export default tracksReducer;
