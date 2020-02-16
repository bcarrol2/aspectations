import React from 'react';
import anime from "animejs";


export default class Landing extends React.Component {
    // componentDidMount = () => {
    //     const anime = require("animejs/lib/anime.js");
    // }
    
    render(){
        return(
            <div>
                <div id="box"></div>
                <h1> Hey </h1>
                { anime({
                    targets: '#box',
                    duration: 2000,
                    translateX: 300,
                }) }
            </div>
        )
    }
}