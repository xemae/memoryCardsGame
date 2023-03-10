import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card/Card";
import {hideCard, setMenu} from "../../redux-toolkit/toolkitSlice";
import classNames from "classnames";
import s from "./Cards.module.css";

const timeOutSingle = 5000
const timeOutFail = 500
const timeOutSuccess = 250

const Cards = () => {
    const dispatch = useDispatch()
    const {cards, showedItemsIds, gameSize} = useSelector(state => state.toolkit)


    useEffect(() => {
        if (showedItemsIds.length > 0) {
            let time = timeOutSingle

            if (showedItemsIds.length === 2) {
                if (showedItemsIds[0].pairId === showedItemsIds[1].pairId) {
                    time = timeOutSuccess
                } else {
                    time = timeOutFail
                }
            }

            const timeOutId = setTimeout(() => {
                dispatch(hideCard())
            }, time)
            if (showedItemsIds.length === 2) {
                clearTimeout(timeOutId - 1)
            }

        }
    }, [showedItemsIds])

    const cardItems = cards?.map(card => <Card card={card} key={card.id}/>) || []

    const onMenuClick = () => {
        dispatch(setMenu())
    }

    return (
        <div>
            <div
                className={classNames(
                    s.cardsContainer,
                    {[s.six]: gameSize == 6},
                    {[s.four]: gameSize == 4},
                    {[s.two]: gameSize == 2},
                )}
            >
                {cardItems}
            </div>

            <button className={s.menuButton} onClick={onMenuClick}>Меню</button>

        </div>
    )
}

export default Cards