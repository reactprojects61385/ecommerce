export const GET_ALL_PRODUCTS_URL = "https://fakestoreapi.com/products";

export const fetchData = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  return await res.json();
};
