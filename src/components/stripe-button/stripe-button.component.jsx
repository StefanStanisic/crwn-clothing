import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IjU0oCbqlnJ944hsflKoyyfmv5C5AteMEh7Tx8AiqMmusiZDZSDWC7CbOnpbm6GRgX7P4wuSWrosWODg2C77wBW00VyuYDreG'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      label = 'Pay Now'
      name = 'CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image = 'https://svgshare.com/i/CUz.svg'
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = 'Pay Now'
      token = {onToken}
      stripeKey = {publishableKey}
    />
  );
};

export default StripeCheckoutButton;