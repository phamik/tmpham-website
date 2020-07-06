import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"

const Navigation = styled.nav`
  top: 0;
  height: 10vh;
  display: flex;
  position: fixed;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 10;
  align-self: center;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    /* position: sticky; */
    position: fixed;
    height: 8vh;
    top: 0;
    left: 0;
    /* right: 0; */
    width: 80%;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  /* padding: 0 10vw; */
  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #63686E;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #ffff;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: fixed;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #ffff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      {/* <Logo /> */}
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar;