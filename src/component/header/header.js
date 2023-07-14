import React from "react";
import '../header/header.css'
import Cat from '../assests/cat4.jpg'
const Header = () => {
    return (
        <>
<div className="container-header"> 
            <div className="header-box">
                <img src={Cat} alt='cat-images' />
                <h1 className="header">
                    Filis Cattus
                </h1>
            </div>
            </div>
            <div className="welcome">
                <h1 className="tranparent-box">

                    Welcome to Filis Cattus

                </h1>

            </div>

        </>
    )
}

export default Header;