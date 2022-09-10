const { gql } = require('apollo-server-express');

module.exports = gql`
    type User {
        id: ID!
        name: String!
        age: Int!
        cats: Int!
    }

    type Query {
        users: [User!]!
        user(id: ID): User
    }
`;
