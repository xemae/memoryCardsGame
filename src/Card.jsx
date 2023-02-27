import {hideCard, showCard} from "./redux-toolkit/toolkitSlice";
import s from "./app.module.css";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

const Card = (props) => {
    const dispatch = useDispatch()
    const showedItemsIds = useSelector(state => state.toolkit.showedItemsIds)
    const {card} = props

    if (showedItemsIds.length < 3 && showedItemsIds.length > 0) {
        setTimeout(
            () => {
                dispatch(hideCard(card))
            },
            2000
        )
    }

    const cardClick = () => {
        if (!card.isShowed) {
            dispatch(showCard(card.id))
        }
    }

    return <div
        // className={s.card}
        className={classNames(
            s.card,
            {[s.noCard]: !card.isShowed && !card.image},
            {[s.cardCover]: !card.isShowed}
        )}
        onClick={cardClick}
    >
        <img
            src={card.image}
            className={classNames(
                {[s.none]: !card.isShowed}
            )}
        />
    </div>
}

export default Card