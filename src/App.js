import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends React.Component {
  state = {
    monters: [],
    searchField: ''
  }

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const result = await response.json()
    this.setState({ monters: result })
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monters, searchField } = this.state
    const filteredMonster = monters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monster Box</h1>
        <SearchBox 
          placeholder="search monster" 
          handleChange={this.handleChange}
        />
        <CardList monters={filteredMonster} />
      </div>
    );
  }
}

export default App;
