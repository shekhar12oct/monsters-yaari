import React ,{ Component } from 'react';
import Cardlist from './components/card-list/Cardlist';
import Searchbox from './components/searchbox/Searchbox';
import './App.css';



class App extends Component
{
  constructor()
  {
    super();
    this.state={
      monsters:[],
      searchField:""
    }
    // this.handleChange=this.handleChange.bind(this);
  }
  
componentDidMount()
{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=> response.json())
  .then(user=>this.setState({monsters:user})
  );
}

// Arrow function will automatically bind the this to its lexiacal scope of the class Components.
handleChange=(e)=>{
  this.setState({searchField:e.target.value});
}

  render()
  {
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(<div className="App">
      <h1> Hello Monsters Dosto</h1>
      <Searchbox
      placeholder="Search Monsters"
      handleChange={this.handleChange}
      />
      <Cardlist monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
