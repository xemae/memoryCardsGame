import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import s from './app.module.css'
import {start, timer} from "./redux-toolkit/toolkitSlice";
import Cards from "./Cards";
import Cover from "./Cover";

function App() {
    const cards = useSelector(state => state.toolkit.cards)
    const time = useSelector(state => state.toolkit.time)
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
        function Timer() {
            useEffect(
                () => {
                    if (cards) {
                        setTimeout(
                            () => {
                                dispatch(timer())
                            },
                            100000
                        )
                    }
                }, []
            )
        }

        if (!startButtonShowed) {
            Timer()

            function setSec() {
                if (time[1] < 10) {
                    return '0' + time[1]
                } else {
                    return time[1]
                }
            }

            function setMin() {
                if (time[0] < 10) {
                    return '0' + time[0]
                } else {
                    return time[0]
                }
            }

            return <div className={s.container}>
                <div className={s.timer}>
                    <div className={s.time}>{setMin()}</div>
                    <div>:</div>
                    <div className={s.time}>{setSec()}</div>
                </div>
                <div className={s.cards}><Cards /></div>
                <div className={s.cards + ' ' + s.cardsCover}>
                    <Cover />
                </div>
            </div>
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <Game/>
                <StartButton/>
            </header>
        </div>
    );
}

export default App;
