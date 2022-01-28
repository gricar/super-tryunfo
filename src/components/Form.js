import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <Input
          description="Nome"
          name="cardName"
          testid="name-input"
        />

        <Input
          description="Descrição"
          type="textarea"
          name="descriptionCard"
          testid="description-input"
        />

        <Input
          description="Atributo 1"
          type="number"
          name="atributo1"
          testid="attr1-input"
        />

        <Input
          description="Atributo 2"
          type="number"
          name="atributo2"
          testid="attr2-input"
        />

        <Input
          description="Atributo 3"
          type="number"
          name="atributo3"
          testid="attr3-input"
        />

        <Input
          description="Imagem"
          name="cardImage"
          testid="image-input"
        />

        <label htmlFor="raridade">
          Raridade:
          <select name="raridade" defaultValue="" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <div>
          <Input
            type="checkbox"
            name="cardTrunfo"
            testid="trunfo-input"
          />
          <h3>Carta Super Trunfo</h3>
        </div>

        <Input
          type="button"
          name="cardSave"
          testid="save-button"
          value="Salvar"
        />

      </form>

    );
  }
}

export default Form;
