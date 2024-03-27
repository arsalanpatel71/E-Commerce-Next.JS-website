import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import Shimmer from "./Shimmer";

const ProductListing = ({
  showFilter,

  products = [],
}) => {
  if (products.length === 0) {
    return (
      <section className="products">
        <div className="products-listing">
          {/* Render multiple shimmer placeholders */}
          {Array.from({ length: 10 }).map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      </section>
    );
  }
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
