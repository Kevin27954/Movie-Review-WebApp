import { Outlet } from "react-router-dom";
import React from "react";

const Layout = ({movies}) => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout;
