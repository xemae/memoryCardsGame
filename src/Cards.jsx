import React, {useEffect, useState} from "react";
import s from './app.module.css'
import {useDispatch, useSelector} from "react-redux";
import {hideCard, showCard} from "./redux-toolkit/toolkitSlice";

const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.toolkit.cards)
    const showedCards = useSelector(state => state.toolkit.showedItems)

    return cards.map(i => {

            setTimeout(
                () => {
                        showedCards.forEach(el => dispatch(hideCard(el)))
                },
                2000
            )

            if (!i.isShowed) {
                return <div className={s.cardCover}
                    key={Math.random()}
                    onClick={() => dispatch(showCard(i))}
                >
                </div>
            }

            return <div
                className={s.card}
                key={Math.random()}
            >
                <img src={i.isShowed ? i.image : ''}/>
            </div>
        }
    )
}

export default Cards