import { RiArrowDropDownLine, RiArrowDropLeftLine } from "react-icons/ri";
import { FaRegSquare } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import PropTypes from "prop-types";

const ProductSort = ({
  toggleFilter,
  showFilter,
  handleDropDownClick,
  showSubItems,
  selectedSortValue,
  dropdownRef,
  isDropdownOpen,
  handleToggleDropdown,
  handleSortOptionClick,
}) => {
  return (
    <section className="product-sort">
      <div className="sort-container">
        <div className="sort-first-part">
          <h3 className="item-count">3456 ITEMS</h3>
          <div>
            <div className="filter-settings" onClick={toggleFilter}>
              <RiArrowDropLeftLine
                className={`arrow-icon ${showFilter ? "flipped" : ""}`}
              />
              <h3 className="hide-filter-text">
                {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
              </h3>
            </div>
          </div>
          <div className={`filter-container ${showFilter ? "show" : ""}`}>
            <div className="filter-item-first">
              <FaRegSquare />
              <h3>CUSTOMIZABLE</h3>
            </div>
            <div className="filter-item">
              <div
                onClick={handleDropDownClick}
                className="filter-item-heading"
              >
                <h3>IDEAL FOR</h3>
                <RiArrowDropDownLine
                  className={`filter-item-icon ${
                    showSubItems ? "flipped" : ""
                  }`}
                />
              </div>
              <p>All</p>
            </div>
            {showSubItems && (
              <div className="filter-sub-items-select">
                <p>Unselect all</p>
                <div className="filter-sub-items">
                  <FaRegSquare /> Men
                </div>
                <div className="filter-sub-items">
                  <FaRegSquare /> Women
                </div>
                <div className="filter-sub-items">
                  <FaRegSquare /> Baby & Kids
                </div>
              </div>
            )}
            <div className="filter-item">
              <div className="filter-item-heading">
                <h3>OCCASION</h3>
                <RiArrowDropDownLine className="filter-item-icon" />
              </div>

              <p>All</p>
            </div>

            <div className="filter-item">
              <div className="filter-item-heading">
                <h3>WORK</h3>
                <RiArrowDropDownLine className="filter-item-icon" />
              </div>

              <p>All</p>
            </div>
            <div className="filter-item">
              <div className="filter-item-heading">
                <h3>FABRIC</h3>
                <RiArrowDropDownLine className="filter-item-icon" />
              </div>

              <p>All</p>
            </div>
            <div className="filter-item">
              <div className="filter-item-heading">
                <h3>SEGMENT</h3>
                <RiArrowDropDownLine className="filter-item-icon" />
              </div>

              <p>All</p>
            </div>
            <div className="filter-item">
              <div className="filter-item-heading">
                <h3>SUITABLE FOR</h3>
                <RiArrowDropDownLine className="filter-item-icon" />
              </div>

              <p>All</p>
            </div>
            <div className="filter-item">
              <div className="filter-item-heading">
                <h3>RAW MATERIALS</h3>
                <RiArrowDropDownLine className="filter-item-icon" />
              </div>

              <p>All</p>
            </div>
            <div className="filter-item">
              <div className="filter-item-heading">
                <h3>PATTERN</h3>
                <RiArrowDropDownLine className="filter-item-icon" />
              </div>
              <p>All</p>
            </div>
          </div>
        </div>
        <div className="custom-dropdown" ref={dropdownRef}>
          <div className="dropdown-header" onClick={handleToggleDropdown}>
            {selectedSortValue}
            <RiArrowDropDownLine />
          </div>
          {isDropdownOpen && (
            <ul className="dropdown-options">
              <li
                onClick={() => handleSortOptionClick("RECOMMENDED")}
                className={
                  selectedSortValue === "RECOMMENDED" ? "selected-option" : ""
                }
              >
                {selectedSortValue === "RECOMMENDED" && <TiTick />}
                RECOMMENDED
              </li>
              <li
                className={
                  selectedSortValue === "NEWEST FIRST" ? "selected-option" : ""
                }
                onClick={() => handleSortOptionClick("NEWEST FIRST")}
              >
                {selectedSortValue === "NEWEST FIRST" && <TiTick />}
                NEWEST FIRST
              </li>
              <li onClick={() => handleSortOptionClick("POPULAR")}>
                {selectedSortValue === "POPULAR" && <TiTick />}
                POPULAR
              </li>
              <li onClick={() => handleSortOptionClick("PRICE: HIGH TO LOW")}>
                {selectedSortValue === "PRICE: HIGH TO LOW" && <TiTick />}
                PRICE: HIGH TO LOW
              </li>
              <li onClick={() => handleSortOptionClick("PRICE: LOW TO HIGH")}>
                {selectedSortValue === "PRICE: LOW TO HIGH" && <TiTick />}
                PRICE: LOW TO HIGH
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
ProductSort.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  showFilter: PropTypes.bool.isRequired,
  handleDropDownClick: PropTypes.func.isRequired,
  showSubItems: PropTypes.bool.isRequired,
  selectedSortValue: PropTypes.string.isRequired,
  dropdownRef: PropTypes.object.isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
  handleToggleDropdown: PropTypes.func.isRequired,
  handleSortOptionClick: PropTypes.func.isRequired,
};

export default ProductSort;
