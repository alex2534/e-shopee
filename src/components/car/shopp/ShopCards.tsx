import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./shoopCards.module.css";

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
export default function shopCards({ data }: ICardata) {

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

  // const onClickGoToDetails = (id: number) => {
  //   navigate(`/carwithdetails/${id}`, { state: { itens: data } });
  // };

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
                  <Card.Body className={styles.bodyContainer}>
                    <div className={styles.titleContainer}>
                      <h4>{cars.title}</h4>
                    </div>
                    <div className={styles.textContainer}>
                      <div>
                        <div>Price Starting at</div>
                        {formatTer.format(cars.price)}
                      </div>
                      <div>In Stock {cars.quantity}</div>
                    </div>
                    <div className={styles.btnContainer}>
                      <div className={styles.btnsContainer}>
                        <div>
                          <Button
                            className={styles.btns}
                          // onClick={() => onClickGoToDetails(value.id)}
                          >
                            More Details
                          </Button>
                        </div>
                        <div>
                          <Button
                            className={styles.btns}
                            onClick={() => onClickGoToCheckout(cars.id)}
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
      </Row>
    </div>
  );
}
