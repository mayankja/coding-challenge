const axios = require("axios");
const BaseUrl='http://localhost:3000/api/v1/apartments'

const getData = async (url) => {
  console.log("hello")
  try {
    var response = await fetch(`${BaseUrl}/${url}`, {
      method: "Get",
      mode: "cors",
      headers: { "content-type": "application/json ; charset:utf-8" },
    });
    var result = await response.json();
    return result;
  } catch (e) {
    return false;
  }
};

// const postData = async (url, body) => {
//   try {
//     var response = await fetch(`${BaseUrl}/${url}`, {
//       method: "post",
//       mode: "cors",
//       body: JSON.stringify(body),
//       headers: { "content-type": "application/json;charset=utf-8" },
//     });
//     var result = await response.json();
//     return result;
//   } catch (e) {
//     return false;
//   }
// };
export { getData, BaseUrl };
