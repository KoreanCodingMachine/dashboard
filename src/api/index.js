export const getRecentOrders = async () => {
  return await fetch('https://dummyjson.com/carts/1').then((res) => res.json());
};
