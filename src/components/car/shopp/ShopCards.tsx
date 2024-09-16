import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import styles from "./shoopCards.module.css";
import { useEffect, useState } from "react";

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
      userId: number;
      totalProducts: number;
      totalQuantity: number;
    }
  ];
}
interface ICardata {
  data: IProps[];
}
export default function shopCards({ data }: ICardata) {
  const [allData, setAllData] = useState<IProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAllData(data);
  }, [data]);
  const onClickGoToDetails = (cart: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
  }) => {
    navigate(`/cartdetails/${cart.id}`, {
      state: { itens: cart, allData },
    });
  };

  // const onClickGoToCheckout = (id: number) => {
  //   navigate(`/carcheckout/${id}`, { state: { itens: data } });
  //   // getAllProducts;
  // };
  const formatTer = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className={styles.container}>
      <div className={styles.colContainer}>
        {data &&
          data.map((value) =>
            value.products.map((cars) => (
              <div
                key={cars.id}
                className={styles.col}
                onClick={() => onClickGoToDetails(cars)}
              >
                <Card key={cars.id}>
                  <Card.Body>
                    <div>
                      <h2 className={styles.titleContainer}>{cars.title}</h2>
                    </div>
                    <Card.Img
                      className={styles.imgContainer}
                      variant="top"
                      src={cars.thumbnail}
                    />
                    <div>
                      <div className={styles.textContainer}>
                        Price Starting at
                        <span>{formatTer.format(cars.price)}</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))
          )}
      </div>
    </div>
  );
}
