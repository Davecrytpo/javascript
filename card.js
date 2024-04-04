const stripe = Stripe('');
const payButton = document.getElementById('pay-button');
payButton.addEventListener('click', () => {
  const cardInput = document.getElementById('card-input');
  
  // Create a payment method using the card details entered by the user
  stripe.createPaymentMethod({
    type: 'card',
    card: cardInput.value,
  }).then((result) => {
    // Handle the payment method result
    if (result.error) {
      // Show error message to the user
      console.error(result.error.message);
    } else {
      // Payment method created successfully, proceed with payment
      const paymentMethodId = result.paymentMethod.id;
      
      // Call your server endpoint to complete the payment using the paymentMethodId
      // You'll need to implement this server-side logic using the Stripe API
      
      // For demonstration purposes, we'll just log the payment method ID
      console.log('Payment method ID:', paymentMethodId);
    }
  });
});
