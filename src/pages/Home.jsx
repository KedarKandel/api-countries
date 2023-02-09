import { useEffect, useState } from "react";
import Country from "../components/Country"
import Titles from "../components/Titles"
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
    <div className="home">
     
      <div className="home-container">
        <Titles/>
        {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}
        {countries?.map((country)=>{
          <Country country = {country} getCountryByName = {getCountryByName} />
        })}
        
      </div>
    </div>
  )
}


export default Home 