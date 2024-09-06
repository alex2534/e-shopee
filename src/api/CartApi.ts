import axios from "axios";

export default class CartApi {
  //
 

  public static async getCartData() {
  try {
    const response = await axios.get("https://dummyjson.com/carts");
    const cartsValues =  response.data.carts.map((e: any) => e)
    return cartsValues;
    // return response.data;
  } catch (error) {
    console.error(error);
  }
}
}
