import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import s from './app.module.css'
import b from './background.module.css'
import {start} from "./redux-toolkit/toolkitSlice";
import Cards from "./components/Cards/Cards";
import Timer from "./components/Timer/Timer";
import Menu from "./components/Menu/Menu";
import classNames from "classnames";

function App() {
    const {gameOn} = useSelector(state => state.toolkit)

    const Game = () => {
        if (gameOn) {
            return (
                    <Cards/>
            )
        }
    }

    return (
        <div className='body'>
            <Timer/>
            <Game/>
            <Menu/>

            <div className={b.light + " " + b.x1}></div>
            <div className={b.light + " " + b.x2}></div>
            <div className={b.light + " " + b.x3}></div>
            <div className={b.light + " " + b.x4}></div>
            <div className={b.light + " " + b.x5}></div>
            <div className={b.light + " " + b.x6}></div>
            <div className={b.light + " " + b.x7}></div>
            <div className={b.light + " " + b.x8}></div>
            <div className={b.light + " " + b.x9}></div>
        </div>
    );
}

export default App
