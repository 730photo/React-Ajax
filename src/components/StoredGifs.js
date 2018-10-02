import React, { Component } from 'react'
import axios from 'axios'
import Gif from './Gif';

export default class StoredGifs extends Component {
  state = {
    storedGifs: []
  }

  componentDidMount = () => {
    axios.get('https://strange-thing-api.herokuapp.com/api')
      .then(response => {
        const storedGifs = response.data.strangeThings
        console.log(response)
        this.setState({ storedGifs })
      })
  }

  render() {
    const gifs = this.state.storedGifs.map((gif, i) => {
      return <Gif url={gif.url} strangeness={gif.strangeness} key={i} />
    })

    return (
      <div className="savedGifsFlexContainer savedGifsContainer">
        {gifs}
      </div>
    )
  }
}
