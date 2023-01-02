import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, font }) {
  return (
    <div className={font}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
