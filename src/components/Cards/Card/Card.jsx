import {showCard} from "../../../redux-toolkit/toolkitSlice";
import s from "./Card.module.css";
import React, {useCallback, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

const Card = (props) => {
    const {card} = props
    const dispatch = useDispatch()
    const {showedItemsIds, removedItemIds, gameSize} = useSelector(state => state.toolkit)

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
        <div>
            <div
            className={classNames(
                s.card,
                // {[s.default]: !isShowed && !isRemoved},
                {[s.default]: !isShowed && !isRemoved},
            {[s.six]:  gameSize == 6},
            {[s.five]: gameSize == 5},
            {[s.four]: gameSize == 4},
            {[s.three]: gameSize == 3},
            {[s.two]: gameSize == 2},
            )}
            onClick={cardClick}
        >
               <span></span>
            <img
                src={card.image}
                className={classNames(
                    s.image,
                    {[s.none]: !isShowed || isRemoved},
                )}
            />
        </div>
        </div>
    )
}

export default Card