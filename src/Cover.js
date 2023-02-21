import React, {useState} from "react";
import s from "./app.module.css";
import {useSelector} from "react-redux";
// eslint-disable-next-line react-hooks/rules-of-hooks

const Cover = () => {
    const [coverShowed, setCoverShowed] = useState(true)
    const cards = useSelector(state => state.toolkit.cards)
    cards.map(i => {
        return <div
            className={s.cover}
            key={i.toString()}
            id={Math.random().toString()}
            // onClick={() => this.classList.add('s.cardCover')}
            onClick={() => setCoverShowed(false)}
            // style={{backgroundColor: coverShowed ? 'white' : 'none'}}
        >
            <div style={{backgroundColor: coverShowed ? 'white' : 'none'}}></div>
        </div>
    })
}

export default Cover