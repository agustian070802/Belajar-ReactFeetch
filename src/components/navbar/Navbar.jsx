// import package React
import React from 'react'

// import css
import "./navbar.css"

// component react adalah sebuah function / class pada javascript yang akan me-Return code JSX

function Navbar(){
    return(

        <nav className="navbar">
            <h1 className="brand">JVALLEY</h1>
            <div className="search_bar">
                <input type="search" className="search_input" placeholder="mau cari apa ?" />
                <button>Search</button>
            </div>
        </nav>

    )
}
export default Navbar