import React from 'react';
import Anime from "@mollycule/react-anime";
import './App.scss';
 
class App extends React.Component {
  render() {
    return (
      <main>
        <div id="tech">
          <h1 style={{color: 'white', fontSize: '75px'}}>Techie</h1>
        </div>
        <Anime
          in
          appear
          duration={3000}
          // loop={3}
          onEntering={{ translateX: [{value: 15}, {value: '+=0'}], translateY: [{value: 0}, {value: 100}], opacity: [0, 0.7] }}
          onExiting={{ translateY: -20, opacity: 0.4 }}
          easing="easeOutCubic"
        >
          <section id="box">
            <p>Git Pull</p>
          </section>
          <section id="box">
            <p>Git Push</p>
          </section>
          <section id="box">
            <p>Git Up</p>
          </section>
        </Anime>
        <Anime
          in
          appear
          duration={1000}
          onEntering={{ translateX: [{value: 15}, {value: '+=0'}], translateY: [{value: 0}, {value: 100}], opacity: [0, 0.7] }}
          easing = "steps(3)"
        >
          <section id="bottom-box">
            <div className="centered">
              <div className="moving">
                <h1>My new year's resolution is 2387 x 1704</h1>
              </div>
            </div>
          </section>
        </Anime>
      </main>
    );
  }
}
 
export default App;