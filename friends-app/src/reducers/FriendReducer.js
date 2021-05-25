import { 
  EDIT_FRIEND, 
  FETCH_START, 
  FETCH_SUCCESS, 
  FETCH_FAIL, 
  DELETE_FRIEND,
  ADD_FRIEND } from '../actions/FriendActions';
  
  const initialState = {
    friends: [],
    isFetching: false,
    error: ''
  };
  
  export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
      case(FETCH_START):
        return({
          ...state,
          isFetching: true
        })
      case(FETCH_SUCCESS):
        return({
          ...state,
          friends: action.payload,
          isFetching: false
        })
      case(FETCH_FAIL):
        return({
          ...state,
          error: action.payload,
          isFetching: false
        })
      case(EDIT_FRIEND):
        const editFriend = state.item.find((friend) => friend.id === action.payload);
        return({
          ...state,
          friends: editFriend,
        })
      case(DELETE_FRIEND):
        const deleteFriend = state.friends.filter(friend=>(action.payload !== friend.id))
        return({
          ...state,
          friends: deleteFriend
        })
      case(ADD_FRIEND):
        return({
          ...state,
          friends: [...state.friends, action.payload]
        })

      default:
        return state;
    }
  };