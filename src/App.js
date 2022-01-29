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
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.enableBtn = this.enableBtn.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    this.enableBtn();
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <hr />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

      </div>
    );
  }
}

export default App;
