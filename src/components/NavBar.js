import NotebookLogo from "../Notebook-logo.jpg";
import { NavLinkStyled, Logo, NavStyled } from "../styles";

const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Logo to="/" className="navbar-brand">
            <img src={NotebookLogo} width="100" alt={"logo"} />
          </Logo>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
            <NavLinkStyled to="/notebooks" className="nav-item">
              Notebooks
            </NavLinkStyled>
          </ul>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
