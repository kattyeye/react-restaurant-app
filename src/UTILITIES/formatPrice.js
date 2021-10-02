let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function formatPrice(priceInCents) {
  return dollarUS.format(priceInCents / 100);
}

export default formatPrice;
