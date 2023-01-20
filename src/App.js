import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
   
  }

  componentDidMount() {
 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }
      ))

  }

  onSearchChange = (event) => {
    console.log(event)
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render from App')
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={this.onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
