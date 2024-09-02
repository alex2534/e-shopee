import axios from "axios";

export default class CartApi {
  //
  static getCartData() {
    //
    const response = axios.get("https://dummyjson.com/carts").then((value) => {
      console.log(value.data);
      return value.data;
    });
    const data = response;
    return data;
  }
}
