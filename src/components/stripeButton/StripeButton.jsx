import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HO1VGCGPXrRYicykS4mp8fu4y2EUge0U7mBXfXndV9DThAOGGPWZSiGfKv6mUdeIJJ7C0flXetGWjacChSVfenK00M7RhmSEf';
    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label={'Pay now'}
            name={'CRWN Clothing Ltd.'}
            billingAddress
            shippingAddress
            image={'https://sendeyo.com/up/d/f3eb2117da'}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel={'Pay now'}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;
