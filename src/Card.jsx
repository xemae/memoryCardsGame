import {hideCard, showCard} from "./redux-toolkit/toolkitSlice";
import s from "./app.module.css";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

const Card = (props) => {

    const dispatch = useDispatch()
    const showedItemsIds = useSelector(state => state.toolkit.showedItemsIds)
    const removedItemIds = useSelector(state => state.toolkit.removedItemIds)
    const {card} = props

    const isShowed = useMemo(() => Boolean(showedItemsIds.find(item => item.id === card.id)), [showedItemsIds, card])
    const isRemoved = useMemo(() => Boolean(removedItemIds.find(id => id === card.id)), [removedItemIds, card])

    const cardClick = useCallback(() => {
        if (!isShowed && !isRemoved) {
            dispatch(showCard({id: card.id, pairId: card.pairId}))
        }
    }, [isShowed, isRemoved, card])

    return (
        <div
            className={classNames(
                s.card,
                {[s.default]: !isShowed && !isRemoved}
            )}
            onClick={cardClick}
        >
            <img
                src={card.image}
                className={classNames(
                    s.image,
                    {[s.none]: !isShowed || isRemoved}
                )}
            />
        </div>
    )
}

export default Card