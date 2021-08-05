import React from 'react';
import './styles/work.css';

function Work() {
  return (
    <div className="work">
      <h1 className="work__h1"> work </h1>
      <div className="games work__games">
        <p>
          <a
            className="games__link"
            href="https://bartosz-lesniewski.github.io/games/"
          >
            games
            <img className="games__image"></img>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Work;
