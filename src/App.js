import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      packOfCards: [],
      trunfoSearch: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.enableBtn = this.enableBtn.bind(this);
    this.trunfoCard = this.trunfoCard.bind(this);
    this.filterCardName = this.filterCardName.bind(this);
    this.filterRareCard = this.filterRareCard.bind(this);
    this.filterTrunfoCard = this.filterTrunfoCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    this.enableBtn();
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick(event, cardToSave) {
    event.preventDefault();
    this.setState((prevState) => ({
      packOfCards: [...prevState.packOfCards, cardToSave],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
    this.trunfoCard();
  }

  removeCard({ cardName, cardTrunfo }) {
    const { packOfCards } = this.state;
    this.setState({
      packOfCards: packOfCards.filter((card) => card.cardName !== cardName),
    });
    if (cardTrunfo) this.setState({ hasTrunfo: false });
  }

  filterCardName({ target: { value } }) {
    const { packOfCards } = this.state;
    this.setState({
      packOfCards: packOfCards.filter(({ cardName }) => cardName.includes(value)),
    });
  }

  filterRareCard({ target: { value } }) {
    const { packOfCards } = this.state;
    if (value === 'todas') {
      this.setState({ packOfCards: packOfCards.map((card) => card) });
    } else {
      this.setState({
        packOfCards: packOfCards.filter(({ cardRare }) => cardRare === value),
      });
    }
  }

  filterTrunfoCard({ target: { checked } }) {
    const { packOfCards, trunfoSearch } = this.state;
    this.setState({
      packOfCards: packOfCards.filter(({ cardTrunfo }) => cardTrunfo === checked),
      trunfoSearch: !trunfoSearch,
    });
  }

  enableBtn() {
    const atr1Int = parseInt(cardAttr1.value, 10);
    const atr2Int = parseInt(cardAttr2.value, 10);
    const atr3Int = parseInt(cardAttr3.value, 10);
    const maxValue = 90;
    const maxSumValue = 210;
    if (
      cardName.value.length > 0
      && cardDescription.value.length > 0
      && cardImage.value.length > 0
      && cardRare.value.length > 0
      && atr1Int >= 0 && atr1Int <= maxValue
      && atr2Int >= 0 && atr2Int <= maxValue
      && atr3Int >= 0 && atr3Int <= maxValue
      && atr1Int + atr2Int + atr3Int <= maxSumValue
    ) this.setState({ isSaveButtonDisabled: false });
    else this.setState({ isSaveButtonDisabled: true });
  }

  trunfoCard() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) this.setState({ hasTrunfo: true });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      packOfCards,
      trunfoSearch,
    } = this.state;

    const props = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    };
    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="containerNewCard">
          <Form
            { ...props }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card { ...props } />
        </section>

        <hr />
        <section>
          <label htmlFor="filterCard">
            <input
              type="text"
              id="filterCard"
              data-testid="name-filter"
              disabled={ trunfoSearch }
              onChange={ (event) => this.filterCardName(event) }
            />
          </label>

          <label htmlFor="cardRareSearch">
            Raridade:
            <select
              name="cardRare"
              id="cardRareSearch"
              defaultValue="todas"
              data-testid="rare-filter"
              disabled={ trunfoSearch }
              onClick={ (event) => this.filterRareCard(event) }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="TrunfoFilter">
            <input
              type="checkbox"
              id="TrunfoFilter"
              data-testid="trunfo-filter"
              onChange={ (event) => this.filterTrunfoCard(event) }
            />
            Super Trunfo
          </label>
        </section>
        <section className="containerNewCard">
          {
            packOfCards.map((card, index) => (
              <div key={ index } className="cardBaralho">
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(card) }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
