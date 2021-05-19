import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import EditFriendForm from './EditFriendForm';

import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';


const BodyStyles = styled.div`
  background-color: #53565A;
  height: 94vh;
  `

const ImgStyles = styled.div`
  background-image: url('https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-position: center;
  background-size: cover;
  height: 94vh;
  opacity: 70%;
  `

const initialFormValues = {
  name: '',
  age: '',
  email: '',
};

const initialFriend = [];

function EditFriend(props) {
  const [friend, setFriend] = useState(initialFriend);
  const [formValues, setFormValues] = useState(initialFormValues);

  const { push } = useHistory();
  const { id } = useParams();

  //console.log(id);

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const updateFriend = (friendToBeUpdated) => {
    axiosWithAuth()
      .put(`/friends/${id}`, friendToBeUpdated)
      .then((res) => {
        setFriend(res.data)
        push('/friends');
      })
      .catch(err => {
        console.log(err);
      })
  };

  const updateSubmit = () => {
    const friendToBeUpdated = {
      name: formValues.name.trim(),
      age: formValues.age.trim(),
      email: formValues.email.trim(),
    };
    updateFriend(friendToBeUpdated);
    //editFeature(friendToBeUpdated);
  };

  
  return (
    <div>
      <BodyStyles>
        <ImgStyles>
        <EditFriendForm
          values={formValues}
          update={inputChange}
          submit={updateSubmit}
        />
        </ImgStyles>
      </BodyStyles>
    </div>
  );
}

export default EditFriend;
