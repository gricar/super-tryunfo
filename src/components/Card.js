import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;

    return (
      <div className="card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card" className="cardPreview">{ cardDescription }</p>
        <p data-testid="attr1-card" className="cardPreview">{ cardAttr1 }</p>
        <p data-testid="attr2-card" className="cardPreview">{ cardAttr2 }</p>
        <p data-testid="attr3-card" className="cardPreview">{ cardAttr3 }</p>
        <p data-testid="rare-card" className="cardPreview">{ cardRare }</p>
        {
          cardTrunfo
            ? <p data-testid="trunfo-card" className="cardPreview">Super Trunfo</p>
            : ''
        }
      </div>
    );
  }
}

export default Card;

const { string, number, bool } = PropTypes;

Card.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: number.isRequired,
  cardAttr2: number.isRequired,
  cardAttr3: number.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
};
