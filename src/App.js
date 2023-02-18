import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import s from './app.module.css'
import {start} from "./redux-toolkit/toolkitSlice";

function App() {
    const cards = useSelector(state => state.toolkit.cards)
    const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <div className={s.container}>
          <div className={s.timer}></div>
          <div className={s.cards}></div>
          <button className={s.start} onClick={() => dispatch(start)}>start</button>

        </div>
      </header>
    </div>
  );
}

export default App;
