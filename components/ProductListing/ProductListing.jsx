import ProductCard from "../ProductCard/ProductCard";
import PropTypes from "prop-types";
// import "./ProductListing.css"

const ProductListing = ({
  showFilter,

  products = [],
}) => {
  return (
    <section className="products">
      {showFilter && <div className="arrange-products"></div>}
      <div className="products-listing">
        {products &&
          Array.isArray(products) &&
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </section>
  );
};

ProductListing.propTypes = {
  showFilter: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductListing;
