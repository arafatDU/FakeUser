import Navbar from "../home/navbar/Navbar"
import { Outlet } from "react-router-dom";
import Footer from "../home/footer/Footer";

const Root = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
  )
}

export default Root
