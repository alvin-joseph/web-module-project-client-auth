import React from 'react';
import styled from 'styled-components';

const FormStyles = styled.div`
  font-family: 'Fira Sans Condensed', sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
  border: 2px solid black;
  background-color: #c3c3c3;
  width:65%;
  padding: 2%;
  opacity: 95%;
  border-radius: 15px;
`

const H1Styles = styled.h1`
  font-size: 2rem;
  margin-bottom: 2%;
`

const SpacerDiv = styled.div`
  height: 25vh;
`

const BodyStyles = styled.div`
  display: flex;
  justify-content: center;
`

const ErrorStyles = styled.div`
  color: #d51b00;
  font-size: 1.5rem;
  margin-bottom: .3%;
`

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };


  return (
    <>
      <SpacerDiv></SpacerDiv>
      <BodyStyles>
        <FormStyles>
          <H1Styles>Update your Listing:</H1Styles>
          <form onSubmit={onSubmit}>
            <label>
              Name:&nbsp;&nbsp;
              <input
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
              />&nbsp;&nbsp;
            </label>
            <label>
              Age:&nbsp;&nbsp;
              <input
                value={values.age}
                onChange={onChange}
                name="age"
                type="text"
              />&nbsp;&nbsp;
            </label>
            <label>
              Email:&nbsp;&nbsp;
              <input
                value={values.email}
                onChange={onChange}
                name="email"
                type="email"
              />&nbsp;&nbsp;
            </label>
            <button>Submit</button>
          </form>
        </FormStyles>
      </BodyStyles>
    </>
  );
}
