import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Card from "./Card";
import {hideCard} from "./redux-toolkit/toolkitSlice";

const timeOutSingle = 4000
const timeOutFail = 1000
const timeOutSuccess = 1000

const Cards = () => {

    const dispatch = useDispatch()
    const cards = useSelector(state => state.toolkit.cards)
    const showedItemsIds = useSelector(state => state.toolkit.showedItemsIds)

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

    return cards.map(card => <Card card={card} key={card.id} />)
}

export default Cards