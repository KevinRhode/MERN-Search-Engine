const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Query {

    }
    type Book {
        _id:ID
        bookID:string
        authors:[string]
        description:string
        title:string
        image:string
        link:string
    }
    type User {
        _id:ID
        username:string
        email:string
        bookCount:Int
        savedBooks:[Book]
    }
`;
module.exports = typeDefs;