import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGE_POSTED: {
      return [...state, action.payload];
    }
    case CHANNEL_SELECTED: {
      return []; // clearing view because of channel change
    }
    default:
      return state;
  }
}
