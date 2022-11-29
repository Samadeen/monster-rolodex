import { Component } from 'react';
import Card from '../Card/Card';
import './CardList.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </>
    );
  }
}

export default CardList;
