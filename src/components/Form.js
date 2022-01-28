import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <Input
          description="Nome"
          name="cardName"
          testid="name-input"
          value={ cardName }
          onInputChange={ onInputChange }
        />

        <label htmlFor="cardDescription">
          Descrição
          <textarea
            id="cardDescription"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <Input
          description="Atributo 1"
          type="number"
          name="cardAttr1"
          testid="attr1-input"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />

        <Input
          description="Atributo 2"
          type="number"
          name="cardAttr2"
          testid="attr2-input"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />

        <Input
          description="Atributo 3"
          type="number"
          name="cardAttr3"
          testid="attr3-input"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />

        <Input
          description="Imagem"
          name="cardImage"
          testid="image-input"
          value={ cardImage }
          onInputChange={ onInputChange }
        />

        <label htmlFor="raridade">
          Raridade:
          <select
            name="cardRare"
            defaultValue=""
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          <input
            type="checkbox"
            id="cardTrunfo"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Carta Super Trunfo
        </label>

        <input
          type="button"
          id="cardSave"
          name="cardSave"
          data-testid="save-button"
          value="Salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
