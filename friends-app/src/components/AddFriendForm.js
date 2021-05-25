import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const NewUserContainer = styled.div`
  padding: 50px;
  font-family: 'Fira Sans Condensed', sans-serif;
  input,
  button {
    appearance: none;
    background: none;
    border: none;
    outline: none;
  }

  h2 {
    color: #D4F7D4;
    font-size: 1.9rem;
    font-weight: 500;
    margin-bottom: 13%;
  }

  button {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: #f8f8f8;
    cursor: pointer;
    font-weight: 700;
    width:100px;

    &:hover {
      background-image: linear-gradient(to bottom, #559E54, #D4F7D4);
    }
  }
`;

const StyleForm = styled.form`
  border: 1px solid rgb(210, 210, 210);
  border-radius: 4px;
  box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
  display: block;
  position: relative;
  background-image: linear-gradient(to bottom right, #B83214, #FD3A0F);
`;

const FormGroup = styled.div`
  display: block;
  width: 300px;
  margin-bottom: 18%;

  label {
    display: block;
    color: #D4F7D4;
    font-size: 1.1rem;
    margin-bottom: 10%;
    transition: 0.4s;
  }

  &:focus-within label {
    color: #341109;
  }

  input {
    display: block;
    padding: 10px 15px;
    background-color: #f8f8f8;
    border-radius: 8px;
    transition: 0.4s;
    margin-top: 2%;

    &:focus {
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    }
  }

  select {
    display: block;
    padding: 10px 15px;
    background-color: #f8f8f8;
  }
`;

const Buttons = styled.div`
  display:flex;
  justify-content:space-around;
`;


function AddFriendForm(props) {
  const { values, change, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  const { push } = useHistory();

  const routeToFriends = () => {
    push('/friends');
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <StyleForm onSubmit={onSubmit}>
      <NewUserContainer>
        <h2>Friend Details:</h2>
        <FormGroup>
          <label>
            Name&nbsp;
            <input
              type="text"
              value={values.name}
              onChange={onChange}
              name="name"
              placeholder="enter name here.."
            />
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Age&nbsp;
            <input
              type="text"
              value={values.age}
              onChange={onChange}
              name="age"
              placeholder="enter age here.."
            />
          </label>
        </FormGroup>
        <FormGroup>
          <label>
            Email&nbsp;
            <input
              type="email"
              value={values.email}
              onChange={onChange}
              name="email"
              placeholder="enter email here.."
            />
          </label>
        </FormGroup>
        <Buttons>
          <button>Submit</button>
          <button onClick={routeToFriends}>Back</button>
        </Buttons>
      </NewUserContainer>
    </StyleForm>
  );
}


export default AddFriendForm;
