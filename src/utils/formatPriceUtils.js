const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format((price * 50).toFixed(2));
  return dollarsAmount;
};

export default formatPrice;
