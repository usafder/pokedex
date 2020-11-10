import React from 'react';
import { connect } from 'react-redux';
import { Card, List, Spinner } from '../components';
import { fetchPokemonList } from '../core/thunks/pokemon';
import { getClassNameForType, padString } from '../utils';

// TODO: convert class component into a functional component
class App extends React.Component {
  componentDidMount() {
    this.props.fetchPokemonList();
  }

  renderSpinner = () => (<Spinner loadingText="Loading..." />);

  renderItem = (data) => {
    const id = padString(data.id);

    return (
      <Card
        key={data.name + id}
        title={data.name}
        subtitle={`#${id}`}
        imageSource={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
      >
        {
          data.types.map(({ type }, index) => (
            <span
              key={type.name + id}
              className={`f6 dib mv2 ph2 pv1 br2 ${getClassNameForType(type.name)} ${index > 0 ? 'ml1' : ''}`}
            >
              {type.name}
            </span>
          ))
        }
      </Card>
    );
  };

  renderList = () => (<List dataSource={this.props.pokemonList} renderItem={this.renderItem} />);

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
