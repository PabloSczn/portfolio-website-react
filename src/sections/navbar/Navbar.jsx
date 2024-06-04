import React from 'react';
import data from './data';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="#top" className='nav__name'>
          Pablo Sanchez Narro
        </a>
        <ul className='nav__menu'>
          {data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;