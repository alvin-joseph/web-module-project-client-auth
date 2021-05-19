import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import AddFriendForm from './AddFriendForm';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: #53565a;
  `;

const initialFormValues = {
  /// TEXT INPUTS ///
  name: '',
  age: '',
  email: ''
};

const initialFriends = [];

function AddFriend(props) {
  const [friends, setFriends] = useState(initialFriends);
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const postNewFriends = (friend) => {
    axiosWithAuth()
      .post('/friends', friend)
      .then((res) => {
        //console.log(res.data);
        setFriends([...friends, res.data]);
        
        push('/friends');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const submitForm = () => {
    const newFriend = {
      name: formValues.name.trim(),
      age: formValues.age.trim(),
      email: formValues.email.trim(),
    };

    postNewFriends(newFriend);
  };

  return (
    <MainContainer>
      <AddFriendForm
        values={formValues}
        change={inputChange}
        submit={submitForm}
      />
    </MainContainer>
  );
}

export default AddFriend;