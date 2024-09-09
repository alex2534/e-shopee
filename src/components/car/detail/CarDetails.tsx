import { useEffect } from "react";
 
import { useLocation } from "react-router-dom";

interface IProps {
 
}
// interface ICardata {
//   allData: IProps[];
// }

export default function CarWithDetails( ) {
  // const [ setAllData] = useState<IProps[]>([]);
  const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    // const { state } = location.state as { state: IProps[] };
    // console.log(state.map((value) => value.products[0].id));
    // if (state !== undefined) setAllData(state);
  }, [location]);


  // const formatTer = new Intl.NumberFormat("pt-BR", {
  //   style: "currency",
  //   currency: "BRL",
  // });

  // const onClickGoToCheckout = (id: number) => {
  //   navigate(`/carcheckout/${id}`, { state: { itens: allData } });
  // };
  return (
    <><div>Details</div></>
    // <div className={styles.container}>
    //   <Row key={Math.random() * 10000000} xs={1} md={2} className="g-4">
    //     {allData !== undefined &&
    //       allData.map((value, idx) =>
    //         value.products.map((cars) => (
    //           <Col key={idx}>
    //             <Card>
    //               <Card.Img
    //                 className={styles.imgContainer}
    //                 variant="top"
    //                 src={cars.thumbnail}
    //               />
    //               <Card.Body>
    //                 <Card.Title className={styles.titleContainer}>
    //                   <h2>{cars.title}</h2>
    //                 </Card.Title>
    //                 <Card.Text className={styles.textContainer}>
    //                   <span>
    //                     <span>Price Starting at</span>
    //                     {formatTer.format(cars.price)}
    //                   </span>

    //                   <span>Quantity {cars.quantity}</span>
    //                   <span>Total {formatTer.format(cars.total)}</span>
    //                   <span>
    //                     Discount {formatTer.format(cars.discountPercentage)}
    //                   </span>
    //                   <span>
    //                     discountedTotal &nbsp;
    //                     {formatTer.format(cars.discountedTotal)}
    //                   </span>
    //                 </Card.Text>
    //                 <section className={styles.btnContainer}>
    //                   <Button
    //                     className={styles.btns}
    //                     onClick={() => onClickGoToCheckout(cars.id)}
    //                   >
    //                     Buy Now
    //                   </Button>
    //                 </section>
    //               </Card.Body>
    //               {/* <Card.Footer className={styles.footerContainer}>
    //                 <span>User ID {value.userId}</span>
    //                 <span>Total Products {value.totalProducts}</span>
    //                 <span>Total Quantity {value.totalQuantity}</span>
    //                 <span>
    //                   Total Discount{formatTer.format(value.discountedTotal)}
    //                 </span>
    //                 <span>Total {formatTer.format(value.total)}</span>
    //               </Card.Footer> */}
    //             </Card>
    //           </Col>
    //         ))
    //       )}
    //   </Row>
    // </div>
  );
}
