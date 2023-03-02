import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {start} from "../../redux-toolkit/toolkitSlice";
import s from './Menu.module.css'

const Menu = () => {
    const {gameOn, removedItemIds} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()


    const StartButton = () => {
        if (!gameOn && removedItemIds.length === 0) {

            return <button
                onClick={
                    () => dispatch(start())
                }>
                Начать игру
            </button>
        }
    }

    const SizeButton = () => {
        if (!gameOn && removedItemIds.length === 0) {
            return <button
                // className={s.gameSize}
                // onClick={dispatch(changeGameSizeMode())}
            >
                Настройки
            </button>
        }
    }
    if (!gameOn && removedItemIds.length === 0) {
        return (
            <div className={s.menu}>
                <h1>Мемные коты</h1>
                <StartButton/>
                <SizeButton/>
            </div>
        )
    }
}

export default Menu