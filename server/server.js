const { ApolloServer } = require("apollo-server");

const typeDefs = `
    type Item {
        id: Int
        type: String
        description: String
    }

    type Query {
        items (type: String): [Item]
    }
`;

const items = [
    { id: 1, type: "prefix", description: "air" },
    { id: 2, type: "prefix", description: "earth" },
    { id: 3, type: "prefix", description: "fire" },
    { id: 4, type: "sufix", description: "hub" },
    { id: 5, type: "sufix", description: "city" },
    { id: 6, type: "sufix", description: "town" }
];

const resolvers = {
    Query: {
        items(_, args) {
            return items.filter(item => item.type === args.type);
        }
    }
};


const server = new ApolloServer({ typeDefs, resolvers });
server.listen();