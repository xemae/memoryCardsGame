import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import s from './Win.module.css'

const Win = (props) => {
    const {timeCount} = props
    const {removedItemIds, cards, attempts, successfulAttempts} = useSelector(state => state.toolkit)

    const badAttempts = attempts - successfulAttempts
    const accuracy = Math.round((successfulAttempts / attempts) * 100)

    if (removedItemIds.length === cards.length) {
        return (
            <div className={s.winCover}>
                <h1>Результаты</h1>

                <div>
                    <h2>попытки: {attempts}</h2>
                    <h2>количество неудачных попыток: {badAttempts}</h2>
                    <h2>точность: {accuracy} %</h2>
                    <h2>вы справились за {timeCount}</h2>
                </div>

            </div>
        )
    }
}

export default Win