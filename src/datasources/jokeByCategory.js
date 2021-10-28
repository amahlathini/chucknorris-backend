const { RESTDataSource } = require("apollo-datasource-rest");
class JokeByCategoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes";
  }

  async getJokeByCategory(category) {
    return this.get(`random?category=${category}`);
  }
}

module.exports = JokeByCategoryAPI;
