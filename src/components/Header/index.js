import React from 'react';

const Header = () => (
  <header>
    <div className="bg-near-black">
      <nav className="flex flex-wrap items-center justify-between pa3">
        <span className="ph2 ml2-m ml3-l f3 fw6 near-white no-underline ba bw2 br4">
          Pokédex
        </span>
        <a
          className="mr2-m mr3-l f6 fw4 near-white no-underline dim"
          href={process.env.REACT_APP_GITHUB_REPO_URL}
          target="blank"
        >
          About
        </a>
      </nav>
    </div>
  </header>
);

export default React.memo(Header);
