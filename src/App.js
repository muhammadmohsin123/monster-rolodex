import React from "react";
import Cards from "./components/card-list/card-list.component.jsx";
import Search from "./components/search-box/Search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ persons: users }));
  }

  render() {
    const { persons, searchField } = this.state;
    const filterdPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <div className="App">
          <h1>Monster Rolodex</h1>
          <Search
            handler={(e) => this.setState({ searchField: e.target.value })}
          />

          <Cards persons={filterdPersons}>
            <div className="card-list"></div>
          </Cards>
        </div>
      </>
    );
  }
}

export default App;
