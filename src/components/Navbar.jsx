import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Navbar = ({onSearch}) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div>
            <MenuIcon />
          </div>
          <div>
            <Link to="/" className="routerLink">
              <h2>Countries</h2>
            </Link>
          </div>
        </div>
        <div className="right">
          <SearchInput onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
