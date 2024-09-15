import { useEffect, useState } from "react";
import CartApi from "../../../api/CartApi";
import NavBar from "../../nav/NavBar";
import styles from "./carSearch.module.css";
import Footer from "../../footer/Footer";
import ShopCards from "../shopp/ShopCards";

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
    }
  ];
}

export default function CartSearch() {
  const [allData, setAllData] = useState<IProps[]>([]); //CartApi.getCartData();

  useEffect(() => {
    async function getAllProducts() {
      try {
        const data = await CartApi.getCartData().then((value) => {
          return value;
        });
        setAllData(data);
      } catch (error) {
        console.log("error");
      }
    }

    getAllProducts();
  }, []);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className={styles.container}>
        <div>
          <div>
            <div className={styles.underConstruction}>
              <div>UNDER CONSTRUCTION PLEASE BE PATIENT</div>
            </div>
          </div>
        </div>
        <div>{/* <button onClick={getAllProducts}>Click</button> */}</div>
        <div>
          <ShopCards data={allData} />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
