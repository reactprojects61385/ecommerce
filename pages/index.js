import { fetchData, GET_ALL_PRODUCTS_URL } from "../utils/data";
import ViewAll from "../product/ViewAll";

export default function Home({ productsData }) {
  return <ViewAll data={productsData} />;
}

export async function getServerSideProps() {
  const productsData = await fetchData(GET_ALL_PRODUCTS_URL);

  return {
    props: {
      productsData,
    },
  };
}
