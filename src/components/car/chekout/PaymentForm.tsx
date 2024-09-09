import { TextField } from '@mui/material';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Cards from 'react-credit-cards-2';
import styles from "./cartCheckout.module.css";


const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt: { target: { name: any; value: any; }; }) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt: { target: { name: any; }; }) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div className={styles.cardContainer}>
      <div>
        <div>
          <h3>Payment method</h3>
        </div>
        <div>
          <div>
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
            // focused={state.focus}
            />
          </div>
          <div>
            <form className={styles.paymentForm} action="">
              <div>
                <div>
                  <TextField
                    id="outlined-card-number"
                    label="Card number"
                    autoComplete="current-cardNumber"
                    type="number"
                    name="number"
                    placeholder="Card Number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-name-on-card"
                    type="text"
                    label="Name on card"
                    name='name'
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  <TextField
                    id="outlined-expiration-date"
                    type="date"
                    // label="Expiration date"
                    name='expiry'
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  <TextField
                    id="outlined-cvc"
                    type="text"
                    label="CVC"
                    name='cvc'
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>

                <div>

                  <TextField
                    id="outlined-zip"
                    type="text"
                    label="Zip code"
                    name='zip'
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />

                  <TextField
                    id="outlined-country"
                    type="text"
                    label="Country"
                    name='country'
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}

                  />
                </div>
              </div>
              <div>
                <Button className={styles.button} type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;