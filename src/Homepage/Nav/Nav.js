import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <>
      <section id="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
          <Link to="/blog">Blog</Link>
        </div>
      </section>
    </>
  );
}

export default Nav;
