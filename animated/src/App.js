import React from 'react';
import Anime from "@mollycule/react-anime";
import './App.scss';
 
class App extends React.Component {
  render() {
    return (
      <main>
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
            <p> Word </p>
          </section>
          <section id="box">
            <p> Word2 </p>
          </section>
          <section id="box">
            <p> Word3 </p>
          </section>
        </Anime>
        <Anime
          in
          appear
          duration={1000}
          onEntering={{ translateX: [{value: 15}, {value: '+=0'}], translateY: [{value: 0}, {value: 100}], opacity: [0, 0.7] }}
          easing="easeOutCubic"
        >
          <section id="bottom-box">
            <div className="centered">
              <div className="moving">
                <h1>Hey</h1>
              </div>
            </div>
          </section>
        </Anime>
      </main>
    );
  }
}
 
export default App;