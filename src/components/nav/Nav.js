import { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  const navStyle = {
    color: "white",
  };
  const searchRef = useRef(null);
  const [searchToggle, setSearchToggle] = useState(false);
  function search() {
    const inputSearch = searchRef.current;
    return setSearchToggle((x) => !searchToggle);
  }
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="navLinks">
        <div className="search">
          {searchToggle && (
            <input
              type="text"
              ref={searchRef}
              placeholder="Search Products, brands and catalogs"
            />
          )}
          <button onClick={search}>search</button>
          {/* <FontAwesomeIcon icons={faSearch}></FontAwesomeIcon> */}
        </div>
        <Link className="link" style={navStyle} to="/">
          <li>Homepage</li>
        </Link>
        <Link className="link" style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="link" style={navStyle} to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}
