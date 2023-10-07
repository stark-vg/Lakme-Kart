import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  background-color: black;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.9px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color: black;
  color: Purple;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  background-color: black;
`;

const Logo = styled.h1`
  padding: 10px 20px;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  color: Purple;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <Left>
            <Link class="navbar-brand" to="/">
              <Logo>LAKME</Logo>
            </Link>
          </Left>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <MenuItem>
                  <Link class="nav-link " aria-current="page" to="/">
                    HOME
                  </Link>
                </MenuItem>
              </li>

              <li class="nav-item">
                <MenuItem>
                  <Link class="nav-link " to="/productlist">
                    CATEGORIES
                  </Link>
                </MenuItem>
              </li>

              <li class="nav-item">
                <MenuItem>
                  <Link class="nav-link" to="/product">
                    PRODUCT
                  </Link>
                </MenuItem>
              </li>

              <li class="nav-item">
                <MenuItem>
                  <Link class="nav-link" to="/cart">
                    CART
                  </Link>
                </MenuItem>
              </li>

              {/* <li class="nav-item">
                <MenuItem>
                  <Link class="nav-link" to="/register">
                    REGISTER
                  </Link>
                </MenuItem>
              </li> */}

              <li class="nav-item">
                <MenuItem>
                  <Link class="nav-link" to="/contact">
                    CONTACT
                  </Link>
                </MenuItem>
              </li>

              <li class="nav-item">
                <MenuItem>
                  <Link class="nav-link" to="/login">
                    LOGIN
                  </Link>
                </MenuItem>
              </li>

              <li class="nav-item">
                <MenuItem>
                  <Link class="nav-link" to="/api">
                    API
                  </Link>
                </MenuItem>
              </li>

              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> 

              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>*/}
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
              <MenuItem>
                <Badge
                  badgeContent={4}
                  color="primary"
                  style={{ color: "white", fontSize: 16 }}
                >
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </form>
          </div>
        </div>
      </nav>
 
    </>
  );
};

export default Navbar;
