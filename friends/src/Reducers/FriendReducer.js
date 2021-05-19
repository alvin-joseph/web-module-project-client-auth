import { EDIT_FRIEND } from '../Actions/FriendActions';
  
  const initialState = {
    friend: {
      name: '',
      age: '',
      email: '',
    }
  };
  
  export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case EDIT_FRIEND:
        const editFriend = state.item.find((friend) => friend.id === action.payload);
        return {
          ...state,
          friend: editFriend,
        };
  
      default:
        return state;
    }
  };