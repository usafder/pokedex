import React from 'react';
import { connect } from 'react-redux';
import { Badge, Card, List, Popup, Spinner } from '../components';
import { showPopup, hidePopup } from '../core/actionCreators/popup';
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
        onClickHandler={this.props.showPopup}
      >
        <div className="flex flex-wrap justify-center pb1">
          {
            data.types.map(({ type }) => (
              <Badge
                key={type.name + id}
                label={type.name}
                backgroundColor={getClassNameForType(type.name)}
              />
            ))
          }
        </div>
      </Card>
    );
  };

  renderList = () => (<List dataSource={this.props.pokemonList} renderItem={this.renderItem} />);

  render() {
    return (
      <div>
        {
          this.props.isPopupVisible && (
            <Popup hidePopup={this.props.hidePopup}>
              <p>Work in progress.</p>
            </Popup>
          )
        }
        {this.props.isLoading ? this.renderSpinner() : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemonList: state.pokemon.list,
  isLoading: state.pokemon.isLoading,
  isPopupVisible: state.popup.isVisible,
});

const mapDispatchToProps = { fetchPokemonList, showPopup, hidePopup };

export default connect(mapStateToProps, mapDispatchToProps)(App);
