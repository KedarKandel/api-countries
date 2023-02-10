import { useEffect, useState } from "react";
import Country from "../components/Country";
import Navbar from "../components/Navbar";
import Titles from "../components/Titles";
import { apiURL } from "../utils/api";
import  ReactPaginate  from "react-paginate";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  //paginate

  const [currentCountries, setCurrentCountries] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentCountries(countries.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(countries.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, countries]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % countries.length;
    setItemOffset(newOffset)
  };

  //paginate

  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();
      console.log(data);

      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };
  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);

      if (!res.ok) throw new Error("Not found any country!");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <Navbar onSearch={getCountryByName} />
      <div className="home">
        <div className="home-container">
          <Titles />
          {isLoading && !error && (
            <h4 style={{ color: "white" }}>Loading...</h4>
          )}
          {error && !isLoading && <h4 style={{ color: "red" }}>{error}</h4>}
          {currentCountries.length > 0 && !isLoading && !error && (
            <div>
              {currentCountries.map((country, index) => (
                <Country key={index} country={country} />
              ))}
            </div>
          )}
        </div>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>
  );
};

export default Home;
