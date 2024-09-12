import { useEffect, useState } from "react";
import CartApi from "../../../api/CartApi";
import CarCards from "../shopp/ShopCards";
import NavBar from "../../nav/NavBar";
import styles from "./carSearch.module.css";
import Footer from "../../footer/Footer";

interface IProps {

  products: [
    {
      id: number;
      title: string;
      price: number;
      quantity: number;
      total: number;
      discountPercentage: number;
      discountedTotal: number;
      thumbnail: string;
      images: string[];
    }
  ];
}

export default function CartSearch() {

  const [allData, setAllData] = useState<IProps[]>([]); //CartApi.getCartData();

  useEffect(() => {
      async function getAllProducts() {
    try {
      const data = await CartApi.getCartData().then((value) => {
        console.log(value);
        return value;
      });
      setAllData(data);
    } catch (error) {
      console.log("error");
    }
      }

      getAllProducts();
  },[])


  console.log(allData);

  return (
    <>
      <div >
        <NavBar />
      </div>
      <div className={styles.container}>
        <div>
          <div>
            <div className={styles.underConstruction}>
              <svg>
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                  UNDER CONSTRUCTION PLEASE BE PATIENT
                </text>
              </svg>
            </div>
          </div>

        </div>
        <div>
          {/* <button onClick={getAllProducts}>Click</button> */}
        </div>
        <div>
          <CarCards data={allData} />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}