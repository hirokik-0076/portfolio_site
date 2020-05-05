/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import picture from '../img/my_image.jpg';
import Social from '../components/Social';

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={picture} className="picture"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={['I am Hiroki Kinoshita.', 'I am a frontend engineer.']}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}

export default Home;
