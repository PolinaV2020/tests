const axios = require("axios");
const mapArrToStrings = require("../mapArrToStrings/mapArrToStrings");

const getData = async () => {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    const usersIds = users.data.map((user) => user.id);
    return mapArrToStrings(usersIds);
  } catch (e) {
      console.log(e);
  }
};


module.exports = getData;