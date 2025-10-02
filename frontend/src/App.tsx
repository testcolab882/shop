import {
  Outlet,
  
} from "react-router";

import Loading from './components/Loading.tsx';

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";





function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
      <Loading />
    </>
  )
}

export default App
