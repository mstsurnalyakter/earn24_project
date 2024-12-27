// import Header from "./Header/Header";
// import Footer from "./Footer/Footer"; import { ScrollRestoration, Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

import { Outlet } from "react-router-dom";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Company from "../components/Company";
import OurPartner from "../components/OurPartner";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-900">
        {/* <h1>This is layout</h1> */}
       
        <Navbar></Navbar>
        {/* <Body></Body> */}
            {/* <Navbar /> */}
            {/* <main>{children}</main> */}
            {/* This is where the child routes will be rendered */}
            {/* <Outlet /> */}
            <Outlet />
            <Footer/>
            {/* <Footer /> */}
            {/* this for scroll to top  */}
            {/* <ScrollRestoration /> */}
        </div>
    );
};

export default Layout;