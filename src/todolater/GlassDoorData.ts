// const axios = require("axios");
import axios from "axios";

export class GlassDoorData {
  public static async getAllData() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://Real-Time-Glassdoor-Data.proxy-production.allthingsdev.co/v1/company-search?query=goo&limit=10",
      headers: {
        "x-apihub-key": "k5akhrH2zqIJPgnGkvwo8YQX97gTSsydFJ8zrVFfvDIze-2whK",
        "x-apihub-host": "Real-Time-Glassdoor-Data.allthingsdev.co",
        "x-apihub-endpoint": "4d310abe-4d21-425b-b8fa-d7b38097c65a",
      },
    };

    return axios
      .request(config)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
