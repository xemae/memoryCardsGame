import s from "./Timer.module.css";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getStringTimeBySeconds} from "../../lib";
import Win from "../Win/Win";

const Timer = () => {
    const {gameOn} = useSelector(state => state.toolkit)
    const [timeCount, setTimeCount] = useState(0)
    const [timeOutId, setTimeOutId] = useState(0)

    useEffect(
        () => {
            if (gameOn === true) {
                const timeId = setInterval(
                    () => {
                        setTimeCount(prevTimeCount => prevTimeCount + 1)
                    }, 1000
                )
                setTimeOutId(timeId)
            }
            if (!gameOn) {
                clearInterval(timeOutId)
            }
        }, [gameOn]
    )

    if (!gameOn) {
        return (
            <Win timeCount={getStringTimeBySeconds(timeCount)}/>
        )
    }

    return <div className={s.timer}>
            {getStringTimeBySeconds(timeCount)}
        </div>
}

export default Timer


