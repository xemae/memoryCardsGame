import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setGameSize, start} from "../../redux-toolkit/toolkitSlice";
import s from './Menu.module.css'

const Menu = () => {
    const {gameOn, removedItemIds, gameSize} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()

    const [sizeMode, setSizeMode] = useState(false)
    const [showRules, setShowRules] = useState(false)

    const StartButton = () => {
        return <button
            onClick={
                () => dispatch(start())
            }
        >
            Начать игру
        </button>
    }

    const SizeButton = () => {
        return <button
            onClick={() => setSizeMode(true)}
        >
            Настройки
        </button>
    }

    const Rules = () => {
        return <button
            onClick={() => setShowRules(true)}
        >
            Правила игры
        </button>
    }

    if (sizeMode) {
        const changeGameSizeHandler = (e) => {
            const size = +e.target.value;
            dispatch(setGameSize(size));
        }

        return (
            <div className={s.menu}>
                <h1>Мемные коты</h1>

                <div className={s.gameSize}>
                    <h2>{'Размер поля: ' + gameSize + 'x' + gameSize}</h2>
                    <div>
                        <input
                            className={s.gameSizeSlider} type="range" min="2" max="6" step="2" value={gameSize}
                            onChange={(e) => changeGameSizeHandler(e)}
                        />
                    </div>
                </div>

                <button onClick={() => setSizeMode(false)}>Меню</button>
            </div>
        )
    }

    if (showRules) {
        return <div className={s.menu}>
            <h1>Мемные коты</h1>
            <h3>
                Перед вами таблица из клеток. В каждой из них спрятан мем с котом. За один ход вы можете раскрыть два
                мема с котами.
                Если мемные коты окажутся разными, они снова спрячутся, а если в обеих открытых клетках будут одинаковые
                коты,
                то эти клетки исчезнут. Игра будет закончена, когда вы раскроете все клетки.
                Ваша задача - сделать это как можно быстрее. Чем лучше вы будете запоминать, какой кот прячется в каждой
                клетке,
                тем быстрее вы справитесь с задачей.
            </h3>
            <button onClick={() => setShowRules(false)}>Меню</button>
        </div>
    }

    if (!gameOn && removedItemIds.length === 0) {
        return (
            <div className={s.menu}>
                <h1>Мемные коты</h1>
                <StartButton/>
                <SizeButton/>
                <Rules/>
            </div>
        )
    }

}

export default Menu