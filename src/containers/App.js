import React from 'react';
import Header from 'components/Header';
import Spinner from 'components/Spinner';

const PokemonList = React.lazy(() => import('components/PokemonList'));
const Popup = React.lazy(() => import('components/Popup'));
const PokemonDetails = React.lazy(() => import('components/PokemonDetails'));

const App = () => {
  return (
    <>
      <Header />
      <React.Suspense fallback={<Spinner loadingText="Loading..." />}>
        <Popup>
          <PokemonDetails />
        </Popup>

        <PokemonList />
      </React.Suspense>
    </>
  );
};

export default App;
