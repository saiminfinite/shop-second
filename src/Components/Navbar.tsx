import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
  const {openCart,cartQuantity} = useShoppingCart()
  return (
    <NavbarBs sticky="top" className=" bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>{cartQuantity > 0 &&(
        <Button
        onClick={openCart}
        style={{width:"7rem", height:"2rem", position:"relative"}}
        variant="outlineColor" className="rounded-circle"
        >
          <img
            src="  https://icons8.com/icon/lMhEFosNBRbT/shopping-cart"
            alt=" Add-Cart"
          />
          <div className="rounded-circle bg-danger d-flex justify-content-center
                align-items-center"
                 style={{
                    color:"white",
                    width:"1.5rem",
                    height:"1.5rem",
                    position:"absolute",
                    bottom:"0",
                    transform:"translate(25%,25%)"
                    }}>{cartQuantity}</div>
        </Button>)}
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
