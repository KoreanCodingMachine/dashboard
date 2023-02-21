export const getRecentOrders = async () => {
  return await fetch('https://dummyjson.com/carts/1').then((res) => res.json());
};

export const getRevenue = async () => {
  return await fetch('https://dummyjson.com/carts').then((res) => res.json());
};

export const getInventory = async () => {
  return await fetch('https://dummyjson.com/products').then((res) =>
    res.json()
  );
};

export const getAllUsers = async () => {
  return await fetch('https://dummyjson.com/users').then((res) => res.json());
};

export const getComments = async () => {
  return await fetch('https://dummyjson.com/comments').then((res) =>
    res.json()
  );
};
