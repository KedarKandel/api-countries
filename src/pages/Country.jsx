import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
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
      <div className="infoContainer">
        <div className="top">
          <div className="topLeft">
            <div className="letter">N</div>
            <div className="topInfo">
              <h1>Nepal</h1>
              <h4>Kathmandu</h4>
            </div>
          </div>

          <div>
            <MoreVertIcon className="icon" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1545662618-66de187bbf69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmVwYWwlMjBmbGFnfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <p>
          Nepal (English: /nɪˈpɔːl/;[14] Nepali: नेपाल [nepal]), formally the
          Federal Democratic Republic of Nepal (Nepali: सङ्घीय लोकतान्त्रिक
          गणतन्त्र नेपाल),[15] is a landlocked country in South Asia. It is
          mainly situated in the Himalayas, but also includes parts of the
          Indo-Gangetic Plain, bordering the Tibet Autonomous Region of China to
          the north, and India in the south, east, and west, while it is
          narrowly separated from Bangladesh by the Siliguri Corridor, and from
          Bhutan by the Indian state of Sikkim.
        </p>
        <div className="bottom">
          <div className="left">
            <div style={{ cursor: "pointer" }}>
              <Link to="/">
                <ArrowBackIosNewIcon />
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
    </div>
  );
};

export default Country;
