import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

const Container = styled.div`
  padding: 100px;
  font-family: 'Fira Sans Condensed', sans-serif;
  input,
  button {
    appearance: none;
    background: none;
    border: none;
    outline: none;
  }

  h2 {
    color: black;
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
`

const FormGroup = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
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
    color: white;
  }

  input {
    display: block;
    padding: 13px 15px;
    background-color: #f8f8f8;
    border-radius: 8px;
    transition: 0.4s;
    margin-top: 8px;

    &:focus {
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Buttons = styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`;

const StyleForm = styled.form`
  margin-left:36%;
  margin-top:10%;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 4px;
  box-shadow: 0px 1px 6px 2px rgb(128, 127, 127);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #B83214, #FD3A0F);
  width:26%;
`

class Login extends React.Component {
  state = {
    credentials: {
      username: 'Lambda School',
      password: 'i<3Lambd4'
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    //1. make an axios call on the localhost:5000/api/login
    //2. pass in our username and password
    //3. console.log the token that is returned.
    //4. console.log the error if returned
    axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(res=>{
        localStorage.setItem("token", res.data.payload);
        this.props.history.push('/friends');
      })
      .catch(err=>{
        console.log(err);
      });
  };

  routeToHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <StyleForm onSubmit={this.login}>
          <Container>
            <FormGroup>
              <label>
                Username&nbsp;
                <input
                  type="text"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
                />
              </label>
            </FormGroup>
            <FormGroup>
              <label>
                Password&nbsp;
                <input
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                />
              </label>
            </FormGroup>
            <Buttons>
              <button>Log in</button>
              <button onClick={this.routeToHome}>Back</button>
            </Buttons>
          </Container>
      </StyleForm>
    );
  }
}

export default Login;