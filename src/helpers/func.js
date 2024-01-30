export const calcTotalPrice = (products) => {
  console.log(products);

  const res = products.reduce((acc, item) => {
    return (acc += item.subPrice);
  }, 0);
  return res;
};

export const calcSubPrice = (product) => {
  const sum = product.item.price * product.count;
  return sum;
};
