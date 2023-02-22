import React, {useEffect, useState} from "react";
import s from './app.module.css'
import {useDispatch, useSelector} from "react-redux";
import {showCard} from "./redux-toolkit/toolkitSlice";

const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.toolkit.cards)

    return cards.map(i => {

        function showHideCard(i) {
                // console.log(cardShowed)

                // setCardShowed(!cardShowed)
                // console.log(cardShowed)

            dispatch(showCard(i))

                 setTimeout(
                    () => {
                        // console.log(cardShowed)

                        dispatch(showCard(i))
                        // setCardShowed(!cardShowed)

                    },
                    2000
                )
                // setCardShowed(!cardShowed)
            }

            if (!i.isShowed) {
                return <div
                    key={Math.random()}
                    onClick={ () => showHideCard(i)}>fff</div>
            }

                return <div
                    className={s.card}
                    key={Math.random()}
                    // onClick={() => dispatch(showCard(i))
                    //     && showHideCard(i)}
                    // style={{
                    // transition: "all 0.3s",
                    // backgroundColor: cardShowed ? 'white' : 'none',
                    // visibility: cardShowed? 'visible' : 'hidden',
                    // height: !cardShowed ? '100px' : '50px'
                    // }}
                >
                    <img src={i.image}/>
                </div>


        }
    )
}

export default Cards