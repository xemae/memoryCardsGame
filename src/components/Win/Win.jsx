import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from './Win.module.css'
import Menu from "../Menu/Menu";
import {setMenu} from "../../redux-toolkit/toolkitSlice";

const Win = (props) => {
    const {timeCount} = props
    const dispatch = useDispatch()
    const {removedItemIds, cards, attempts, successfulAttempts} = useSelector(state => state.toolkit)

    const badAttempts = attempts - successfulAttempts
    const accuracy = Math.round((successfulAttempts / attempts) * 100)

    const onMenuClick = () => {
        dispatch(setMenu())
        return <Menu/>
    }

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

                <button onClick={onMenuClick}>Меню</button>

            </div>
        )
    }
}

export default Win