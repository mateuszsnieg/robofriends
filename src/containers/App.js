
import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './app.css'
import { robots } from "../robots";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users})
        )
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
       
    }
  
    render() {
        const { searchfield } = this.state;
        const filterRobots = robots.filter(robots => {
        return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        return !robots.length ?
            <h1 className="tc">LOADING</h1> :
        (
        <div className="tc">
            <h1 className="f1">ROBOFRIENDS</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filterRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
         );     
    }
}

export default App