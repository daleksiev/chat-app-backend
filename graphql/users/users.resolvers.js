const usersData = require('./data');

const users = () => usersData;

const user = (_, { id }) => usersData.find(user => user.id == id);

module.exports = {
    Query: {
        users,
        user
    },
};
