import React from 'react';
import { connect } from 'react-redux';
import { List, Spinner } from '../components';
import { fetchPokemonList } from '../core/thunks/pokemon';

// TODO: convert class component into a functional component
class App extends React.Component {
  componentDidMount() {
    this.props.fetchPokemonList();
  }

  renderSpinner = () => (<Spinner loadingText="Loading..." />);

  renderList = () => (<List dataSource={this.props.pokemonList} />);

  render() {
    return (
      <div>
        {this.props.isLoading ? this.renderSpinner() : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemonList: state.pokemon.list,
  isLoading: state.pokemon.isLoading,
});

const mapDispatchToProps = { fetchPokemonList };

export default connect(mapStateToProps, mapDispatchToProps)(App);
