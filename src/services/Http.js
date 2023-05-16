import axios from "axios";
async function Http(path, options) {
  let baseURL = "";
  try {
    let BaseURL = baseURL + path;
    console.log(BaseURL);
    let token = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).user.token
      : "";
    if (token) {
      options.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    options.url = BaseURL;
    let result = await axios(options);

    return result;
  } catch (error) {
    if (error.code === "ERR_BAD_REQUEST") {
      let errorss = error.response.status;
      if (errorss === 401) {
        localStorage.removeItem("user");
        window.location.href = "/";
      } else if (errorss === 409) {
        localStorage.removeItem("user");
        window.location.href = "/";
      } else if (errorss === 404) {
        let response = {};
        response.statusText = error.message;
        response.status = 404;
        return response;
      } else {
        localStorage.removeItem("user");
        window.location.href = "/";
      }
    } else {
      let response = {};
      response.statusText = error.message;
      response.status = 504;
      return response;
    }
  }
}
export default Http;
