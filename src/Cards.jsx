import React, {useEffect, useState} from "react";
import s from './app.module.css'
import {useDispatch, useSelector} from "react-redux";
import {hideCard, showCard} from "./redux-toolkit/toolkitSlice";

const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.toolkit.cards)

    return cards.map(i => {
            function showHideCard(i) {
                dispatch(showCard(i))

                setTimeout(
                    () => {
                        dispatch(hideCard(i))
                    },
                    2000
                )
            }

            if (!i.isShowed) {
                return <div className={s.cardCover}
                    key={Math.random()}
                    onClick={() => showHideCard(i)}
                >
                </div>
            }

            return <div
                className={s.card}
                key={Math.random()}
            >
                <img src={i.image}/>
            </div>
        }
    )
}

export default Cards