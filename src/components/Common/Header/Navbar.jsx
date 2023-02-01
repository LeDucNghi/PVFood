import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleScrollTo = async (x, y) => {
    if (pathname !== "/home") {
      await navigate(`/home`);
      await window.scrollTo(x, y);
    } else window.scrollTo(x, y);
  };

  return (
    <nav id="menu">
      <div
        className="menu-item"
        // onClick={() => setScroll({ ...scroll, y: 700 })}
        onClick={() => handleScrollTo(0, 700)}
      >
        <div className="menu-text">
          <p className="menu-link">About</p>
        </div>
      </div>

      <div
        className="menu-item highlight"
        // onClick={() => setScroll({ ...scroll, y: 1400 })}
        onClick={() => handleScrollTo(0, 1400)}
      >
        <div className="menu-text">
          <p className="menu-link">Collections</p>
        </div>
      </div>

      <div
        className="menu-item"
        // onClick={() => setScroll({ ...scroll, y: 3100 })}
        onClick={() => handleScrollTo(0, 3100)}
      >
        <div className="menu-text">
          <p className="menu-link">New</p>
        </div>
      </div>

      <div
        className="menu-item"
        // onClick={() => setScroll({ ...scroll, y: 4000 })}
        onClick={() => handleScrollTo(0, 4000)}
      >
        <div className="menu-text">
          <p className="menu-link">Socials</p>
        </div>
      </div>

      <div id="sub-menu-container">
        <div id="sub-menu-holder">
          <div id="sub-menu-bottom"></div>
        </div>
      </div>
    </nav>
  );
}
