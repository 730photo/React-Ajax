import React, {Component} from "react"
import RandomGif from "./RandomGif";
import StoredGifs from "./StoredGifs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="backgroundImg" src="http://i.imgur.com/DysM91b.png" alt="gif"/>
        <h1>Giff-y</h1>
        <RandomGif />
        <StoredGifs />
      </div>
    );
  }
}

export default App;


