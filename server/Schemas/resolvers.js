const { Book, User } = require('../models');
const fetch = require('node-fetch');


const resolvers = {
  Query: {
    books: async (query) => {
      return await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    }
  }
};

module.exports = resolvers;
