import "./Navbar.css";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { Col, Container, Row } from "react-bootstrap";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

function Navbar1() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Row>
        <Col>
          <span className="navbarBrand"> pennyWise</span>
        </Col>
        <Col className="navBarProfile">
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Avatar sx={{ width: 24, height: 24 }}>
              {user && user.name[0]}
            </Avatar>
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {" "}
            {isLoggedIn && <MenuItem onClick={logOutUser}>Logout</MenuItem>}
          </Menu>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar1;
