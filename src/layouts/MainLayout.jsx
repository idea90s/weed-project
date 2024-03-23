import PropTypes from "prop-types";
import Navbar from "../componets/Navbar";
import Cart from "../componets/Cart";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-4 py-6 min-h-screen">{children}</main>
      <Cart />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
