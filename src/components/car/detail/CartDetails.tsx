import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./cardwithDetail.module.css";
import { Col, Card, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface IProps {
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

export default function CartDetails() {
  const [allData, setAllData] = useState<IProps>();

  const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    const { itens } = location.state as { itens: IProps };
    setAllData(itens);
  }, [location]);

  const formatTer = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // const onClickGoToCheckout = (id: number) => {
  //   navigate(`/carcheckout/${id}`, { state: { itens: allData } });
  // };
  return (
    <>
      <div className={styles.detailsContainer}>
        {" "}
        <h1>Details</h1>
      </div>
      <div className={styles.container}>
        <Row>
          {allData &&
            [allData].map((cars) => (
              <Col key={Math.random() * 10000000}>
                <Card className={styles.colContainer}>
                  <Card.Img
                    className={styles.imgContainer}
                    variant="top"
                    src={cars.thumbnail}
                  />
                  <Card.Body className={styles.titleTextContainer}>
                    <Card.Title className={styles.titleContainer}>
                      <h2>{cars.title}</h2>
                    </Card.Title>
                    <Card.Text className={styles.textContainer}>
                      <span>
                        <span>Price Starting at</span>
                        {formatTer.format(cars.price)}
                      </span>
                      <span>Total {formatTer.format(cars.total)}</span>
                      <span>
                        Discount {formatTer.format(cars.discountPercentage)}
                      </span>
                      <span>Total {formatTer.format(cars.total)}</span>
                      <span>
                        discountedTotal &nbsp;
                        {formatTer.format(cars.discountedTotal)}
                      </span>
                      <span>Quantity avaliable {cars.quantity}</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className={styles.footerContainer}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae dolores maiores placeat, possimus qui asperiores
                      officia ab officiis nesciunt ex nemo explicabo facere,
                      voluptas modi in cupiditate! Commodi, enim doloribus?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui sapiente repellendus vero exercitationem esse modi,
                      est earum repellat quos, voluptatibus quam! Quae saepe
                      incidunt, natus alias animi vitae ex dolorum! Lorem ipsum
                      dolor sit, amet consectetur adipisicing elit. Cum deleniti
                      exercitationem voluptatibus architecto dolorem, saepe at
                      enim quia veritatis incidunt. Quaerat similique pariatur
                      obcaecati sint suscipit fugit aut dicta facilis.
                    </p>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
        </Row>
        <div className={styles.checkoutContainer}>
          <div>
            <span>Total {Number(allData?.price)}</span>
            <p>Free Delivery</p>
            <p>Sent by eShopper</p>
            <p>Sold by eShopper</p>
            <p>
              Return <span>Eligible for Return,</span>
            </p>
            <p>
              Packaging <span>Shipping without additional packaging </span>
            </p>
            <p>
              Payment <span>Secure transaction</span>
            </p>
          </div>
          quantity
          <section className={styles.btnContainer}>
            <Button variant="primary">Primary</Button>{" "}
            <Button className={styles.btns} variant="outline-primary">
              Primary
            </Button>{" "}
            {/* <Button className={styles.btns}>Add to cart</Button>
            <Button
              className={styles.btns}
              // onClick={() => onClickGoToCheckout(cars.id)}
            >
              Buy Now
            </Button> */}
          </section>
        </div>
      </div>
    </>
  );
}
