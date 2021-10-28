const { ApolloServer } = require("apollo-server");

const typeDefs = require("./src/schema");
const JokeAPI = require("./src/datasources/joke");
const CatAPI = require("./src/datasources/category");
const JokeByCategoryAPI = require("./src/datasources/jokeByCategory");
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    categories: async (parent, args, { dataSources }) => {
      return await dataSources.catAPI.getAllCategories().then((data) => {
        // console.log("data is: ", data);
        return data.map((category, index) => {
          return {
            category: category,
            id: index
          };
        });
      });
    },
    randomJoke: async (parent, args, { dataSources }) => {
      return dataSources.jokeAPI.getRandomJoke();
    },
    jokeByCategory: async (parent, { category }, { dataSources }) => {
      return dataSources.jokeByCategoryAPI.getJokeByCategory(category);
    }
  }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      catAPI: new CatAPI(),
      jokeAPI: new JokeAPI(),
      jokeByCategoryAPI: new JokeByCategoryAPI()
    };
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
