import React, {useState} from "react";
import s from './app.module.css'
import {useDispatch, useSelector} from "react-redux";

const Cards = () => {
    const cards = useSelector(state => state.toolkit.cards)

    const Items = cards.map(i => {
        return <div
            className={s.card}
            // key={Math.random()}
            key={i.toString()}
            // onClick={() => dispatch(showCard())}
        >
            <img src={i}/>
        </div>
    }
    )

    return Items
}

export default Cards