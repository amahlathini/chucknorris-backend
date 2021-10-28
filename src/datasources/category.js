const { RESTDataSource } = require("apollo-datasource-rest");
class CatAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes";
  }
  async getAllCategories() {
    return this.get("/categories").then((data) => {
      //console.log("data is: ", data);
      return data;
    });
  }
}

module.exports = CatAPI;
