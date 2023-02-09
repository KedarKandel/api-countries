import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Country = ({country}) => {

  return (
    
    <div className="countryContainer">
      <img src={country.flags.png} alt="flag-image" />
      <h3>{country.name.common}</h3>
      <h3>{country.region}</h3>
      <h3>{country.population}</h3>
      <div className="moreInfo">
        <ul>
          {country.languages.map((lang, index)=>{
            <li key={index} >{lang}</li>
          })}
        </ul>

        <div>
        <Link to={`/country/${country.name.common}`}>
          <ArrowForwardIosIcon />
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Country;
