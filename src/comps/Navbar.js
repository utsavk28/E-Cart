import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const isLoggedIn = true;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container mb-2" >
                <Link className="navbar-brand  mt-2" to='/' >E-Cart</Link>
                {/* <a className="navbar-brand  mt-2" href="/">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">

                    <ul className="navbar-nav mb-2 ms-2 mb-lg-0">
                        <li className="nav-item  mt-2">
                            <Link className="nav-link active" to='/category' >Categories</Link>

                            {/* <a className="nav-link active" aria-current="page" href="/category">Categories</a> */}
                        </li>
                        <li className="nav-item  mt-2">
                            <Link className="nav-link" to='/about-us' >About Us</Link>
                            {/* <a className="nav-link" href="/about-us">About Us</a> */}
                        </li>
                    </ul>

                    <form className="d-flex mx-auto w-50  mt-2">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {isLoggedIn ? <>
                            <li className="nav-item">
                                <span className="cart" ><Link className="nav-link mt-2" to='/cart' >Cart  </Link></span>
                                {/* <a className="nav-link mt-2" aria-current="page" href="/cart">Cart</a> */}
                            </li>
                            <li><button type="button" className="btn btn-outline-danger ms-2 mt-2">Log Out</button></li>
                        </> : <>
                            <li className="nav-item">
                                <button type="button" className="btn btn-outline-primary mt-2">Sign In</button>
                                <button type="button" className="btn btn-outline-success ms-2 mt-2">Sign Up</button>
                            </li>
                        </>}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
