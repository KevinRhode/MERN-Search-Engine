import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;





export const SAVE_BOOK = gql`
  mutation saveBook($tech1: String!, $tech2: String!) {
    saveBook(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

