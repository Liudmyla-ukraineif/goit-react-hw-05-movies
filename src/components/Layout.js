import { Suspense } from 'react'
import { Outlet } from "react-router-dom";
import { Container, Link, Header } from '../components/Layout.styled'

const Layout = () => {

  return (
  <Container> 
    <Header>
      <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/movies"}>Movies</Link>
      </nav>
    </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet/>
        </Suspense>
      </main>
  </Container>

  )
}

export default Layout;