import { useEffect, useState } from "react";
import Country from "../components/Country";
import Navbar from "../components/Navbar";
import Titles from "../components/Titles";
import { apiURL } from "../utils/api";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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
      <Navbar onSearch={getCountryByName}/>
      <div className="home">
        <div className="home-container">
          <Titles />
          {isLoading && !error && (
            <h4 style={{ color: "white" }}>Loading...</h4>
          )}
          {error && !isLoading && <h4 style={{ color: "red" }}>{error}</h4>}
          {countries.length > 0 && !isLoading && !error && (
            <div>
              {countries.map((country, index) => (
                <Country key={index} country={country} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
