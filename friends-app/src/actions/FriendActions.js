import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const EDIT_FRIEND = 'EDIT_FRIEND';
export const DELETE_FRIEND = "DELETE_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";


export const editFriend = (editedFriend) => {
  return { type: EDIT_FRIEND, payload: editedFriend };
};

export const addfriend = friend => {
  return ({type: ADD_FRIEND, payload:friend})
}

export const deleteFriend = (id) => {
  return({type:DELETE_FRIEND, payload: id})
}

export const updateFriends = (friend, id) => {
  return(dispatch => {
    dispatch({type: FETCH_START});

    dispatch(fetchStart());
    axiosWithAuth()
      .put(`/friends/${id}`, friend)
      .then((res) => {
        dispatch({type: FETCH_SUCCESS, payload:res.data});
      })
      .catch(err=>{
        dispatch({type: FETCH_FAIL, payload:({err})});
      })

  })
}

export const fetchFriends = () => {
  return (dispatch => {
      dispatch({type: FETCH_START});
  
      dispatch(fetchStart());
      axiosWithAuth().get('/friends')
        .then(res=> {
          dispatch({type: FETCH_SUCCESS, payload:res.data});
        })
        .catch(err=>{
          dispatch({type: FETCH_FAIL, payload:err});
        })
  });
}

export const postNewFriend = (friend) => {
  return (dispatch => {
    dispatch({type:FETCH_START});

    dispatch(fetchStart());
    axiosWithAuth()
    .post('/friends', friend)
    .then((res) => {
      dispatch({type: FETCH_SUCCESS, payload:res.data})
    })
    .catch((err) => {
      dispatch({type: FETCH_FAIL, payload:err});
    });
  })
}

export const fetchStart = ()=> {
  return({type: FETCH_START});
}