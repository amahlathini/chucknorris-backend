const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  type Query {
    "Get random joke"
    randomJoke: Joke
    "Get random joke by category"
    jokeByCategory(category: String): Joke
    "Get all categories"
    categories: [Category]
  }

  "A joke is by Chuck Norris"
  type Joke {
    "The joke's content"
    value: String
    icon_url: String
    id: String
  }

  "Categorises a joke according to its theme"
  type Category {
    id: ID
    category: String
  }
`;

module.exports = typeDefs;
