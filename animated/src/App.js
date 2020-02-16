import React from 'react';
import Anime from "@mollycule/react-anime";
import './App.css';
 
class App extends React.Component {
  render() {
    return (
      <main>
        <Anime
          in
          appear
          duration={1000}
          onEntering={{ translateY: [-20, 0], opacity: [0, 1] }}
          onExiting={{ translateY: -20, opacity: 0 }}
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
      </main>
    );
  }
}
 
export default App;