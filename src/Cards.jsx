import React, {useEffect, useState} from "react";
import s from './app.module.css'
import {useDispatch, useSelector} from "react-redux";
import {showCard} from "./redux-toolkit/toolkitSlice";

const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.toolkit.cards)

    return cards.map(i => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            // const [cardShowed, setCardShowed] = useState(false)

            function ShowHideCard(i) {

                setTimeout(
                    () => {
                        dispatch(showCard(i))
                        // setCardShowed(!cardShowed)
                    },
                    1000
                )
            }

            return <div
                className={s.card}
                key={Math.random()}
                // key={i.toString()}
                onClick={() => dispatch(showCard(i))
                    && ShowHideCard(i)}
                // style={{
                //     transition: "all 0.3s",
                //     backgroundColor: cardShowed ? 'white' : 'none',
                // }}
            >
                <img src={i.image}/>
            </div>
        }
    )
}

export default Cards