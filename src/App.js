import React from 'react';
import apiClient from './services/apiClient';
import { List, Spinner } from './components';

// TODO: convert App component into a functional component
class App extends React.Component {
  state = { pokemonList: [], isLoading: true };

  getPokemonList = () => {
    apiClient.get('https://pokeapi.co/api/v2/pokemon?limit=9')
      .then((response) => {
        Promise.all(response.results.map((item) => apiClient.get(item.url)))
          .then((data) => this.setState({ pokemonList: data, isLoading: false }));
      })
      .catch((error) => alert(error));
  };

  componentDidMount() {
    this.getPokemonList();
  }

  renderSpinner = () => (<Spinner loadingText="Loading..." />);

  renderList = () => (<List dataSource={this.state.pokemonList} />);

  render() {
    return (
      <div>
        {this.state.isLoading ? this.renderSpinner() : this.renderList()}
      </div>
    );
  }
}

export default App;
