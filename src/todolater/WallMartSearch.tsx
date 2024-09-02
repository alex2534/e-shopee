import { useState } from "react";
import WallMartApi from "../api/WallMartApi";

interface IProps {
  properties: {
    responseStatus: "string";

    // responseMessage: {
    //   type: "string";
    // };
    // productTitle: {
    //   type: "string";
    // };
    // manufacturer: {
    //   type: "string";
    // };
    // walmartItemId: {
    //   type: "integer";
    // };
    // countReview: {
    //   type: "integer";
    // };
    // productRating: {
    //   type: "string";
    // };
    // soldAndShippedBy: {
    //   type: "string";
    // };
    // oldPrice: {
    //   type: "integer";
    // };
    // price: {
    //   type: "integer";
    // };
    // shippingInformation: {
    //   type: "string";
    // };
    // productHighlights: {
    //   type: "array";
    //   items: {
    //     type: "string";
    //   };
    // };
    // imageUrlList: {
    //   type: "array";
    //   items: {
    //     type: "string";
    //   };
    // };
    // productDetails: {
    //   type: "array";
    //   items: {
    //     type: "object";
    //     properties: {
    //       name: {
    //         type: "string";
    //       };
    //       value: {
    //         type: "string";
    //       };
    //     };
    //   };
    // };
    // available: {
    //   type: "boolean";
    // };
  };
}
export default function WallMartSearch() {
  const [allData, setAllData] = useState<IProps[]>([]);
  async function getAllProducts() {
    const data = await WallMartApi.getWallMartData();
    setAllData(data);
  }

  console.log(typeof allData);
  return (
    <>
      <button onClick={getAllProducts}>Get All</button>
      <h1>WallMartSearch</h1>
      <div>
        {/* {allData.map((value: any) => {
          return <div>{value.properties}</div>;
        })} */}
      </div>
    </>
  );
}
