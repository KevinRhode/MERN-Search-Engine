import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation saveBook($tech1: String!, $tech2: String!) {
    saveBook(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;
