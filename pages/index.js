import { useEffect, useRef, useState } from "react";
import Navbar from "../components//Navbar";
import Header from "@/components//Header";
import ProductListing from "@/components/ProductListing";
import ProductSort from "@/components/ProductSort";
const Home = () => {
  const [isMobile, setIsMobile] = useState(false); // Default to false
  const [showFilter, setShowFilter] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedSortValue, setSelectedSortValue] = useState("RECOMMENDED");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDropDownClick = () => {
    setShowSubItems(!showSubItems);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    setIsMobile(checkIfMobile());
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dropdownRef = useRef(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortOptionClick = (value) => {
    setSelectedSortValue(value);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar isMobile={isMobile} />
      <Header />
      <ProductSort
        toggleFilter={toggleFilter}
        showFilter={showFilter}
        handleDropDownClick={handleDropDownClick}
        showSubItems={showSubItems}
        selectedSortValue={selectedSortValue}
        dropdownRef={dropdownRef}
        isDropdownOpen={isDropdownOpen}
        handleToggleDropdown={handleToggleDropdown}
        handleSortOptionClick={handleSortOptionClick}
      />
      <ProductListing
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        showSubItems={showSubItems}
        setShowSubItems={setShowSubItems}
        products={products}
      />
    </>
  );
};

export default Home;
