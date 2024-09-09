import { useState } from "react";
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { MenuItem } from "@mui/material";

import styles from "./cartCheckout.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PaymentForm from "./PaymentForm";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function CartCheckout() {
  const [open, setOpen] = useState(false);
  const [contains, setContains] = useState(true);

  const { control, getValues, setValue, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.headeCheckout}>
          <div>
            <h1>Your one stop shop</h1>
          </div>
          <div>
            <h3>Checkout(0 Item)</h3>
          </div>
        </div>
        <div className={styles.container}>

          <div>
            {contains === true ?
              (<div className={styles.emptyCart}>
                <h1>Your Cart is empty</h1>
                <p>Add sothing to Your Cart</p>
              </div>
              ) : (

                <div className={styles.addressContainer}>
                  <div>
                    <div>Delivery address</div>
                  </div>

                  <div>
                    <form action="" className={styles.addressForm}>
                      <div>
                        <TextField id="outlined-first-name" type="text" label="First name" />

                        <TextField id="outlined-last-name" type="text" label="Last name" />
                      </div>

                      <div>
                        <TextField id="outlined-address" type="text" label="Address" />

                        <TextField id="outlined-optional" type="text" label="Apartment, suite, etc. (optional)" />
                      </div>

                      <div>
                        <TextField type="text" label="City" />
                        {/* <TextField type="text" label="Country" defaultValue={"Country"} onChange={() => { }}></TextField> */}

                        <TextField
                          id="outlined-select-country"
                          select
                          label="Country"
                          defaultValue="US"

                        >
                          {currencies.map((option) => (

                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>

                      <div>
                        <div>
                          {/* <TextField type="text" label="State" defaultValue={"State"} onChange={() => { }}></TextField> */}
                          <TextField
                            id="standard-select-state"
                            select
                            label="State"
                            defaultValue="US"
                          // slotProps={{
                          //   select: {
                          //     native: true,
                          //   },
                          // }}
                          >
                            {currencies.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </TextField>
                        </div>
                        <div>
                          <TextField type="text" label="Zip code" />
                        </div>
                      </div>

                      {/* </div> */}
                      {/* <TextField type="text" label="Phone number" /> */}
                      <div>
                        <Button variant="contained" >Continue</Button>
                      </div>
                    </form>
                  </div>

                </div>
              )
            }
            <div>
            </div>
            {contains === false ? (
              <div>Come back latter after your order is placed</div>
            ) : (

              <div>
                <PaymentForm />
              </div>

            )}
          </div>
          <div className={styles.chekoutContainer}>

            {contains === true ? (
              <div></div>
            ) : (
              <div>
                <h1>How you'll pay</h1>
                <div>
                  <h3>Order Summary</h3>
                  <p>Items</p>
                  <p>Total</p>
                  <p>Discount</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main >
    </>
  );
}