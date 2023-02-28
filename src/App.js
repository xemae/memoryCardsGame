import React, {useState} from "react";
import {useDispatch} from "react-redux";
import './App.css';
import s from './app.module.css'
import b from './background.module.css'
import {start} from "./redux-toolkit/toolkitSlice";
import Cards from "./Cards";
import Timer from "./Timer";
import Win from "./Win";

function App() {
    // const time = useSelector(state => state.toolkit.time)
    const dispatch = useDispatch()
    const [startButtonShowed, setStartButtonShowed] = useState(true)

    const StartButton = () => {
        if (startButtonShowed) {
            return <button className={s.start}
                           onClick={() => dispatch(start())
                               && setStartButtonShowed(false)
                           }>
                start
            </button>
        }
    }

    const Game = () => {
        if (!startButtonShowed) {
            return (
                <div className={s.cards}>
                    <Cards />

                </div>
            )
        }
    }

    return (
        <div className='body'>
            <Win />
            <Timer startButtonShowed={startButtonShowed}/>
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
