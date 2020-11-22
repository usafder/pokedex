import React from 'react';

// TODO: update About href
const Header = () => (
  <header>
    <div className="bg-near-black">
      <nav className="flex flex-wrap items-center justify-between pa3">
        <a href="/" className="ph2 ml2-m ml3-l f3 fw6 near-white no-underline ba bw2 br4">
          Pokedex
        </a>
        <a
          className="mr2-m mr3-l f6 fw4 near-white no-underline dim"
          href="/"
          target="blank"
        >
          About
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
