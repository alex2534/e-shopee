import axios from "axios";

export class RealTimProductSearch {
  public static getAllData() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://Real-Time-Product-Search.proxy-production.allthingsdev.co/v1/search?q=Nike%20shoes&country=us&language=en&limit=30&sort_by=BEST_MATCH&product_condition=ANY&min_rating=ANY&page=1&min_price=100&max_price=195&free_returns=Do+not+include+in+request&free_shipping=Do+not+include+in+request&max_shipping_days=1&on_sale=Do+not+include+in+request&store_id=null&other_filters=null",
      headers: {
        "x-apihub-key": "k5akhrH2zqIJPgnGkvwo8YQX97gTSsydFJ8zrVFfvDIze-2whK",
        "x-apihub-host": "Real-Time-Product-Search.allthingsdev.co",
        "x-apihub-endpoint": "48cf011e-36c4-45a7-84a6-656a338a49ec",
      },
    };

    return axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
