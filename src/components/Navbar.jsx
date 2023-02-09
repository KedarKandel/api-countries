
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from './SearchInput';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div>
            <MenuIcon/>
          </div>
          <div>
            <h2>Countries</h2>
          </div>
        </div>
        <div className="right">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
