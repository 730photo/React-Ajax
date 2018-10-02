import React, { Component } from 'react'

export default class Gif extends Component {


  render() {
    return (
      <div className="gif">
        <img src={this.props.url} alt="gif" />
        {this.props.strangeness ?
        <p>strangeness: {this.props.strangeness}</p> :
        null}
        <div className="thumbs">
          <i onClick={this.props.thumbsDown} className="fa fa-3x fa-thumbs-down"></i>
          <i onClick={this.props.thumbsUp} className="fa fa-3x fa-thumbs-up"></i>
        </div>
      </div>
    )
  }
}