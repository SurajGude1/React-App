import React from "react";
import './Style.css';

function FunComp() {
    return <>
        <div className="header">
            <div class="logo">
                <h1 class="logo-text"><span>indian</span>Writter</h1>
            </div>

            {/* <!-- Toggle fa-bars --> */}
            <i className="fa fa-bars menu-toggle"></i>

            <ul className="nav">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>

                <li>
                    <a href="#">
                        <i className="fa fa-user"></i>&nbsp;Suraj Gude
                        <i className="fa fa-chevron-down" style={{ fontSize: '.8em' }}></i>
                    </a>
                    <ul>
                        <li><a href="admin/posts/index.html">Dashborad</a></li>
                        <li><a href="#" className="logout">Logout</a></li>
                    </ul>
                </li>
            </ul>

        </div>
    </>
}

export default FunComp;