import React from "react";

function Header(){
    return(
        <div id="wrapper">
            <header>
            <a href="/?food=pasta-and-seafood" className='pasta'>Pasta</a>
            <a href="/?food=ramen" className='ramen'>Ramen</a>
            <a href="/?food=mac-and-cheese" className='mac'>Mac-and-Cheese</a>
            <a href="/?food=street-tacos" className='tacos'>Tacos</a>
            </header>
        </div>
    )
}
export default Header;