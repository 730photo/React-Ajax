import React, { Component } from 'react'
import axios from 'axios'
import Gif from './Gif';

export default class RandomGif extends Component {
  state = {
    gif: ''
  }

  componentDidMount = async () => {
    // const url = 'http://api.giphy.com/v1/gifs/random?api_key=z7CftS8YRlKh0APhwe4nzpKnxcK3WDFo'
    // const response = await axios.get(url)

    const response = await axios.get('http://api.giphy.com/v1/gifs/random?api_key=pkBPX70TXU4moYFQKYorLbUtd79MDJJ9')
    const gif = response.data.data.image_original_url
    this.setState({ gif })
  }

  thumbsUp = () => {
    //Take current gif, add to heroku api.
    const payload = {
      url:this.state.gif,
      strangness: 1
    }
    axios.post('https://strange-thing-api.herokuapp.com/api', payload)
    
  }

  thumbsDown = () => {
    console.log('clicked thumbs Down')
  }

  render() {
    return (
      <div>
        <Gif 
          url={this.state.gif}
          thumbsUp={this.thumbsUp}
          thumbsDown={this.thumbsDown}
        />
      </div>
    )
  }
}

//img tag with gif
