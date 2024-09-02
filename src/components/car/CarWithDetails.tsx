import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./cardwithDetail.module.css";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

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
    }
  ];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export default function CarWithDetails() {
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
        },
      ],
      total: 103774.85,
      discountedTotal: 89686.65,
      userId: 33,
      totalProducts: 4,
      totalQuantity: 15,
    },
  ]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { state } = location.state as { state: IProps[] };
    if (state) setAllData(state);
  }, [location]);

  const formatTer = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const onClickGoToCheckout = (id: number) => {
    navigate(`/carcheckout/${id}`, { state: { itens: allData } });
  };
  return (
    <div className={styles.container}>
      <Row xs={1} md={2} className="g-4">
        {allData.map((value, idx) =>
          value.products.map((cars, index) => (
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

                    <span>Quantity {cars.quantity}</span>
                    <span>Total {formatTer.format(cars.total)}</span>
                    <span>
                      Discount {formatTer.format(cars.discountPercentage)}
                    </span>
                    <span>
                      discountedTotal &nbsp;
                      {formatTer.format(cars.discountedTotal)}
                    </span>
                  </Card.Text>
                  <section className={styles.btnContainer}>
                    <Button
                      className={styles.btns}
                      onClick={() => onClickGoToCheckout(cars.id)}
                    >
                      Buy Now
                    </Button>
                  </section>
                </Card.Body>
                <Card.Footer className={styles.footerContainer}>
                  <span>User ID {value.userId}</span>
                  <span>Total Products {value.totalProducts}</span>
                  <span>Total Quantity {value.totalQuantity}</span>
                  <span>
                    Total Discount{formatTer.format(value.discountedTotal)}
                  </span>
                  <span>Total {formatTer.format(value.total)}</span>
                </Card.Footer>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}
