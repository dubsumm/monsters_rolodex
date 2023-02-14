import { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [title,setTitle] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users)
      )
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)

  }, [monsters, searchField])



  const onSearchChange = (event) => {

    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)

  }
  const onTitleChange = (event) => {

    const searchFieldString = event.target.value
    setTitle(searchFieldString)

  }


  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder='Make your own title'
        className='title-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}



// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }

//   }

//   componentDidMount() {

//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(() => {
//         return { monsters: users }
//       }
//       ))

//   }

//   onSearchChange = (event) => {
//     console.log(event)
//     const searchField = event.target.value.toLocaleLowerCase()

//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     console.log('render from App')
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField)
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={this.onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
