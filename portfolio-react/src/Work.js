import React from 'react';

function Work() {
  return (
    <div className="work">
      <h1 className="work__h1"> work. </h1>
      <div className="games work__games">
        <a
          className="games__link"
          href="https://bartosz-lesniewski.github.io/games/"
        >
          games <span className="games__span">- click here to play!</span>
          <img className="games__image"></img>
        </a>
      </div>
    </div>
  );
}

export default Work;
