import "../styles/globals.css";
import Layout from "../components/layout";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout font={inter.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
