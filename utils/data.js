export const GET_ALL_PRODUCTS_URL = "https://fakestoreapi.com/products";

export const fetchData = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();

  if (res.status === 200 || res.status === 202) {
    return data;
  } else {
    throw new Error("fetch failed..");
  }
};
