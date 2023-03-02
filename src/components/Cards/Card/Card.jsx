import {showCard} from "../../../redux-toolkit/toolkitSlice";
import s from "./Card.module.css";
import React, {useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import Win from "../../Win/Win";

const Card = (props) => {
    const {card} = props
    const dispatch = useDispatch()
    const {showedItemsIds, removedItemIds, cards} = useSelector(state => state.toolkit)

    const isShowed = useMemo(() =>
        Boolean(showedItemsIds.find(item => item.id === card.id)), [showedItemsIds, card])
    const isRemoved = useMemo(() =>
        Boolean(removedItemIds.find(id => id === card.id)), [removedItemIds, card])

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