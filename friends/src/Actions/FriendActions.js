export const EDIT_FRIEND = 'EDIT_FRIEND';

export const editFriend = (editedFriend) => {
  return { type: EDIT_FRIEND, payload: editedFriend };
};