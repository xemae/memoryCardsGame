import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import s from './app.module.css'
import b from './components/Background/background.module.css'
import {start} from "./redux-toolkit/toolkitSlice";
import Cards from "./components/Cards/Cards";
import Timer from "./Timer";
import Win from "./Win";

function App() {
    const gameOn = useSelector(state => state.toolkit.gameOn)
    const dispatch = useDispatch()
    // const [startButtonShowed, setStartButtonShowed] = useState(true)

    const StartButton = () => {
        if (!gameOn) {
            return <button className={s.start}
                           onClick={
                               () => dispatch(start())
                                   // && setStartButtonShowed(false)
                           }>
                start
            </button>
        }
    }

    const Game = () => {
        if (gameOn) {
            return (
                <div className={s.cardsContainer}>
                    <Cards/>
                </div>
            )
        }
    }

    return (
        <div className='body'>
            <Timer/>
            <Game/>
            <StartButton/>
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
