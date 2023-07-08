const { Book, User } = require('../models');



const resolvers = {
    Mutation: {
    saveBook: async (parent, { userId, book }) => {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { savedBooks: book },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      },
    }
};

module.exports = resolvers;
