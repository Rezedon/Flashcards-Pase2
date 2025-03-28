import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../Navbar/Navbar'
import { Outlet } from 'react-router'


export default function Layout() {
  return (
    <>
      <Container>
        <NavBar />
        <Outlet style={{display: 'flex'}} />
      </Container>
    </>
  )
}