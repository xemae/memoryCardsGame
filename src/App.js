import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import s from './app.module.css'
import {start} from "./redux-toolkit/toolkitSlice";
import Cards from "./Cards";

function App() {
    const cards = useSelector(state => state.toolkit.cards)
    const time = useSelector(state => state.toolkit.time)
    const dispatch = useDispatch()
    const [startButtonShowed, setStartButtonShowed] = useState(true)

    const StartButton = () => {
        if (startButtonShowed){
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
            return <div className={s.container}>
                <div className={s.timer} >{time}</div>
                <div className={s.cards}><Cards cards={cards}/></div>
            </div>
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <Game />
                <StartButton />
            </header>
        </div>
    );
}

export default App;
