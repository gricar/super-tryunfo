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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const cardToSave = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

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

        <label htmlFor="cardRare">
          Raridade:
          <select
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        { hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho</p> }

        { !hasTrunfo && (
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
        )}

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ (event) => onSaveButtonClick(event, cardToSave) }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

const { string, number, bool, func } = PropTypes;

Form.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: number.isRequired,
  cardAttr2: number.isRequired,
  cardAttr3: number.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};
