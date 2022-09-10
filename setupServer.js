const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const loadGraphQLFiles = (extensions) => loadFilesSync(path.join(__dirname, './graphql'), { extensions });

module.exports = async (app) => {
    const typeDefs = mergeTypeDefs(loadGraphQLFiles(['.gql.js', '.graphql.js']));
    const resolvers = mergeResolvers(loadGraphQLFiles(['.resolvers.js']))

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });
};
