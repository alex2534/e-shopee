import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CartApi from "../../api/CartApi";
import styles from "./cars.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
interface ICardata {
  data: IProps[];
}
export default function CarCards({ data }: ICardata) {
  
  console.log(data.map((e: any) => e.products.map((e: any) => e)));
  const navigate = useNavigate();

  // async function getAllProducts() {
  //   const data = await CartApi.getCartData().then((value) => {
  //     return value;
  //   });
  //   // if (data === undefined) return;
  //   console.log(data.map((e: any) => e), "carts");
     
  //   // setAllData(data.carts.map((value: any) => value.products));
  //   // setAllData(data);
  // }
  // getAllProducts();

  const onClickGoToDetails = (id: number) => {
    navigate(`/carwithdetails/${id}`, { state: { itens: data } });
  };

  const onClickGoToCheckout = (id: number) => {
    navigate(`/carcheckout/${id}`, { state: { itens: data } });
    // getAllProducts;
  };
  const formatTer = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className={styles.container}>
      <Row xs={1} className={styles.colContainer}>
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        {data !== undefined &&
          data.map((value) =>
            value.products.map((cars) => (
              <Col className={styles.col}>
                <Card>
                  <Card.Img
                    className={styles.imgContainer}
                    variant="top"
                    src={cars.thumbnail}
                  />
                  <Card.Body>
                    <Card.Title className={styles.titleContainer}>
                      <h2>{cars.title}</h2>
                    </Card.Title>
                    <Card.Text className={styles.textContainer}>
                      <span>
                        <span>Price Starting at</span>
                        {formatTer.format(cars.price)}
                      </span>

                      {/* <span>
                      Quantity:&nbsp;
                      {cars.quantity}
                    </span>
                    <span>
                      Total:$&nbsp;
                      {cars.total}
                    </span>
                    <span>
                      Discount:&nbsp;
                      {cars.discountPercentage}
                    </span>
                    <span>
                      discountedTotal:&nbsp;
                      {cars.discountedTotal}
                    </span> */}
                    </Card.Text>
                    <section className={styles.btnContainer}>
                      <Button
                        className={styles.btns}
                        // onClick={() => onClickGoToDetails(value.id)}
                      >
                        More Details
                      </Button>{" "}
                      <Button
                        className={styles.btns}
                        // onClick={() => onClickGoToCheckout(value)}
                      >
                        Buy Now
                      </Button>
                    </section>
                  </Card.Body>
                  {/* <Card.Footer>
                  {value.total}
                  {value.discountedTotal}
                  {value.userId}
                  {value.totalProducts}
                  {value.totalQuantity}
                </Card.Footer> */}
                </Card>
              </Col>
            ))
          )}
      </Row>
    </div>
  );
}
