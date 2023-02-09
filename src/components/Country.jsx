import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`} className="routerLink">
      <div className="countryContainer">
        <img src={country.flags.png} alt="flag-image" />
        <h3>{country.name.common}</h3>
        <h3>{country.region}</h3>
        <h3>{new Intl.NumberFormat().format(country.population)}</h3>
        <div className="moreInfo">
          <ul>
            <li>{country.capital}</li>
          </ul>

          <ArrowForwardIosIcon />
        </div>
      </div>
    </Link>
  );
};

export default Country;
