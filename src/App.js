import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'


class App extends Component {
  
  constructor(){
    super()
    this.state ={
    robots: robots,
    serachfield:''
  }
  }

  onSearch = (event) =>{
   
    // console.log('1')
  this.setState({serachfield: event.target.value})
  
  }

  render(){
    const filteredrobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.serachfield.toLowerCase())
    })
    
   return (
    <div className='tc'>
      <h1>F.R.I.E.N.D.S.</h1>
      
      <SearchBox onSearch = {this.onSearch} />
      <CardList robots={filteredrobots} />

    </div>
  );
  }
}

export default App;
