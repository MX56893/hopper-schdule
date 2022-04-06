import { RECEIVE_EVENT } from "../actions/event_actions"
import { RECEIVE_THREAD } from "../actions/thread_actions";

const threadReducer = (state = [], action) => {
  Object.freeze(state)
  let newState = Object.assign([], state);
  switch(action.type) {
    case RECEIVE_EVENT:
      return action.event.data.threads
    case RECEIVE_THREAD:
      newState.forEach((thread,idx) => {
        if (thread._id === action.thread.data._id){
          newState[idx] = action.thread.data
        }
      })
      return newState
    default:
      return state;
  };
}

export default threadReducer;