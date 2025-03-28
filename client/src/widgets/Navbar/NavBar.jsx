import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import "./NavBar.css"; // Подключаем стили

export default function NavBar() {
  return (
    <Navbar className="navbar-custom">
      <Container className="justify-content-between">
        {/* Логотип и Главная */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          MyApp
        </Navbar.Brand>

        {/* Профиль справа */}
        <Nav className="ms-auto">
          <Nav.Link href="#profile">Профиль</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
