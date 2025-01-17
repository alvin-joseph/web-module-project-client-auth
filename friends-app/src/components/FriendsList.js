import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { fetchFriends, deleteFriend } from '../actions/FriendActions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2% 0;

  h1 {
    font-weight: 500;
    font-size: 2rem;
    font-family: 'Fira Sans Condensed', sans-serif;
  }

  p {
    font-size:21px;
  }
`
const Buttons = styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  width: 20%;

  button {
    padding: 4%;
    margin-left:2.2%;
    background-color: #FD3A0F;
    color:white;
    font-size: 1rem;
    font-family: 'Fira Sans Condensed', sans-serif;
    width:150px;

    &:hover {
      cursor:pointer;
      filter:brightness(1.2);
    }
  }
`;

const FriendsBox = styled.div`
  border: 1px solid rgb(210, 210, 210);
  border-radius: 4px;
  box-shadow: 0px 1px 5px 2px rgb(168, 167, 167);
  background-color: #D4F7D4;
  padding: 2% 0;
  width: 30%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 3%;
  font-family: 'Fira Sans Condensed', sans-serif;

  &:hover {
    filter:brightness(1.1);
  }

  p{
    font-size:1.2rem;
    padding-bottom:2%;
  }
`

const InnerContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  width:100%;
`

const ChangeBtns = styled.div`
  display:flex;
  padding:2%;
  margin-top:5%;
  width:100%;
  justify-content: space-evenly;

  button {
    background-color:#FD3A0F;
    color:white;
    border-radius: 8px;
    font-weight:600;
    &:hover {
      cursor: pointer;
    }
  }
`

class FriendsList extends React.Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  deleteFriend = (friend) => {
    axiosWithAuth()
      .delete(`/friends/${friend.id}`)
      .then((res) => {
        //console.log(res);
        this.props.deleteFriend(friend.id);
      })
      .catch((err) => console.log(err));
  };

  routeToRegister = () => {
        this.props.history.push('/addfriend')
    }


  render() {
    const { friends, isFetching } = this.props
    return (
        <Container>
          <h1>My Friends List:</h1>
          {isFetching && (
              <div className="key spinner">
                <Loader type="Puff" color="#204963" height="60" width="60" />
                <p>Loading Data...</p>
              </div>
            )}
          <InnerContainer>
            {friends.length > 0 && (
              friends.map(friend => (
                <FriendsBox key={friend.id}>
                  <p>Name: {friend.name}</p>
                  <p>Age: {friend.age}</p>
                  <p>Email: {friend.email}</p>
                  <ChangeBtns>
                    <button onClick={() => this.props.history.push(`/editfriend/${friend.id}`)}>Edit Friend</button>
                    <button className="trash-btn" onClick={() => this.deleteFriend(friend)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </ChangeBtns>
                </FriendsBox>
              ))
            )}
          </InnerContainer>
          <Buttons>
            <button onClick={this.routeToRegister}>Add new friend</button>
          </Buttons>
        </Container>
    )
}}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetching: state.isFetching,
    error: state.error
  }
}
export default connect(mapStateToProps, { fetchFriends, deleteFriend })(FriendsList);