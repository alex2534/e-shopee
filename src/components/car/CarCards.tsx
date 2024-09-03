import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CartApi from "../../api/CartApi";
import styles from "./cars.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: number;
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
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface ICardata {
  data: IProps[];
}
export default function CarCards(data: ICardata) {
  const [allData, setAllData] = useState<IProps[]>([
    {
      id: 1,
      products: [
        {
          id: 168,
          title: "Charger SXT RWD",
          price: 32999.99,
          quantity: 3,
          total: 98999.97,
          discountPercentage: 13.39,
          discountedTotal: 85743.87,
          thumbnail:
            "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
          images: [],
        },
      ],
      total: 103774.85,
      discountedTotal: 89686.65,
      userId: 33,
      totalProducts: 4,
      totalQuantity: 15,
    },
  ]);

  console.log(data);
  const navigate = useNavigate();

  async function getAllProducts() {
    const data = await CartApi.getCartData().then((value) => {
      return value;
    });
    if (data === undefined) return;
    setAllData(data.carts.map((value: any) => value.products));
    // setAllData(data);
  }
  // getAllProducts();

  const onClickGoToDetails = (id: number) => {
    navigate(`/carwithdetails/${id}`, { state: { itens: allData } });
  };

  const onClickGoToCheckout = (id: number) => {
    navigate(`/carcheckout/${id}`, { state: { itens: allData } });
  };
  const formatTer = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <div className={styles.container}>
      <button onClick={getAllProducts}></button>
      <Row xs={1} md={2} className="g-4">
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        {allData !== undefined &&
          allData.map((value, idx) =>
            value.products.map((cars) => (
              <Col key={idx}>
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
                        onClick={() => onClickGoToDetails(value.id)}
                      >
                        More Details
                      </Button>{" "}
                      <Button
                        className={styles.btns}
                        onClick={() => onClickGoToCheckout(value.id)}
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
