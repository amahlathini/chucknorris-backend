const { RESTDataSource } = require("apollo-datasource-rest");
class JokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes";
  }
  async getRandomJoke() {
    return this.get("/random");
  }

  async getJokeByCategory(category) {
    return this.get(`random?category=${category}`);
  }
}

module.exports = JokeAPI;
