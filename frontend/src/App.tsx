import {
  Outlet,
  
} from "react-router";

import Loading from './components/Loading.tsx';

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";





function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="py-4 px-3 w-full max-w-280 mx-auto grow">
        <Outlet/>
      </main>
      <Footer />
      <Loading />
    </div>
  )
}

export default App
