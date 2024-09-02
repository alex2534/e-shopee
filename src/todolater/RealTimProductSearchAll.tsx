import { useState } from "react";
import { RealTimProductSearch } from "./RealTimProductSearch";

interface IProps {
  product_id: string;
  product_title: string;
  product_description: string;
  product_photos: string;
  //   product_attributes: [{}];
  product_rating: number;
  product_page_url: string;
  product_num_reviews: number;
  product_num_offers: number;
  typical_price_range: string;
  //   offer: [
  //     {
  //       store_name: string;
  //       store_rating: string;
  //       offer_page_url: string;
  //       store_review_count: string;
  //       store_reviews_page_url: string;
  //       price: string;
  //       shipping: string;
  //       on_sale: boolean;
  //       original_price: string;
  //       product_condition: string;
  //       payment_methods: string;
  //     }
  //   ];
}

export function RealTimProductSearchAll() {
  const [allData, setAllData] = useState<IProps[]>([]);
  async function getAllProducts() {
    const data = await RealTimProductSearch.getAllData();
    if (data !== undefined) {
      setAllData(data);
      console.log(data.map((value: any) => value));
      const photos = data.map((value: any, index: any) => value.product_photos);
      const allPhotos = photos.map((value: any) => value);


    }
  }
  return (
    <>
      <h1>RealTimProductSearchAll</h1>

      <button onClick={getAllProducts}>Get All</button>

      <div>
        <div>
          {allData.map((value: any) => {
            return (
              <div
                key={(value.product_id += Math.random() * 100)}
                style={{ border: "1px solid black" }}
              >
                <h3>Product title: {value.product_title}</h3>
                <br />
                <div>
                  Product description:
                  <p> {value.product_description}</p>
                </div>

                <div>
                  <div>
                    Product photos:
                    <img
                      width={"200px"}
                      height={"200px"}
                      src={value.product_photos.map((value: any) => value)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
