import { Component } from "react";
import Card from "../card/Card";
import './cardList.styles.css'
class CardList extends Component {
  render() {
    console.log('render from Cardlist')
    console.log(this.props.monsters)
    const {monsters} = this.props
    return (
      <div className="card-list">
        {monsters.map((monster) => {
            
          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  }
}
export default CardList;
