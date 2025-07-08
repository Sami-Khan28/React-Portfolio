

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Header.css';
import myImage from '../assets/me.png';

const Header = () => {
  return (
    <div className="header-container text-center">
      <div className="glass-card">
        <div className="profile-image-wrapper">
          <img src={myImage} alt="My Profile" className="profile-image" />
        </div>
        <h1>
          Hi, I'm{' '}
          <span className="typing-text">
            <Typewriter
              words={['Sami Khan', 'a Full Stack Java Developer', 'a Designer']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="lead mt-3">Welcome to my portfolio</p>
      </div>
    </div>
  );
};

export default Header;
