import axios from "axios";

export default class WallMartApi {
  public static getWallMartData = async () => {
    const options = {
      method: "GET",
      url: "https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product",
      params: {
        url: "https://www.walmart.com/ip/Media-Remote-for-PlayStation-5/381848762",
      },
      headers: {
        "x-rapidapi-key": "04bccb0a62msh107dfe5305ce574p194696jsn72ee88763092",
        "x-rapidapi-host": "axesso-walmart-data-service.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log( response);
      const values =  response;
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
}
