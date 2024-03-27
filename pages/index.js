// pages/index.js
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductListing from "@/components/ProductListing/ProductListing";
import ProductSort from "@/components/ProductSort/ProductSort";
import TopHeader from "@/components/TopHeader/TopHeader";
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
      {/* <Header /> */}
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
