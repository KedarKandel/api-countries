import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "../utils/api";
const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const res = await fetch(`${apiURL}/name/${countryName}`);

        if (!res.ok) throw new Error("Could not found!");

        const data = await res.json();

        setCountry(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className="countryPage">
      {isLoading && !error && <h4 style={{ color: "white" }}>Loading...</h4>}
      {error && !isLoading && <h4 style={{ color: "red" }}>{error}</h4>}
      {country?.map((con) => {
        const letterArray = con.name.common.split("");
        let letter = letterArray[0];

        return (
          <div className="infoContainer" key={con.name.common}>
            <div className="top">
              <div className="topLeft">
                <div className="letter">{letter}</div>
                <div className="topInfo">
                  <h1>{con.name.common}</h1>
                  <h4>{con.capital}</h4>
                </div>
              </div>

              <div>
                <MoreVertIcon className="icon" style={{ cursor: "pointer" }} />
              </div>
            </div>
            <img src={con.flags.png} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              tortor eget sem condimentum pulvinar. Suspendisse mollis quis ante
              sit amet facilisis. Praesent placerat eleifend enim, vel ultrices
              eros tristique sed. Sed a ante non urna viverra efficitur. Nam
              eleifend ut est vitae sodales. Phasellus euismod facilisis mollis.
            </p>
            <div className="bottom">
              <div className="left">
                <div style={{ cursor: "pointer" }}>
                  <Link to="/" className="routerLink">
                    <ArrowBackIosNewIcon style={{ color: "black" }} />
                  </Link>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <LocationOnIcon />
                </div>
              </div>
              <div className="right">
                <div>
                  <div style={{ cursor: "pointer" }}>
                    <ExpandMoreIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
