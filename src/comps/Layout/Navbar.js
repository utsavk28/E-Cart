import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { products } = useSelector((state) => state.cart);
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container mb-2'>
                <Link className='navbar-brand  mt-2' to='/'>
                    E-Cart
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse text-center'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mb-2 ms-2 mb-lg-0'>
                        <li className='nav-item  mt-2'>
                            <Link className='nav-link active' to='/category'>
                                Categories
                            </Link>
                        </li>
                    </ul>

                    <form className='d-flex mx-auto w-50  mt-2'>
                        <input
                            className='form-control'
                            type='search'
                            placeholder='Search'
                            aria-label='Search'
                        />
                    </form>

                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <span className='cart'>
                                <Link className='nav-link mt-2' to='/cart'>
                                    Cart{' '}
                                </Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
