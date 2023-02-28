import s from "./app.module.css";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getStringTimeBySeconds} from "./lib";
import Win from "./Win";

const Timer = () => {
    const {gameOn} = useSelector(state => state.toolkit)
    const [timeCount, setTimeCount] = useState(58)
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
        return             <Win timeCount={getStringTimeBySeconds(timeCount)}/>
    }

    return <div className={s.container}>
        <div className={s.timer}>
            {getStringTimeBySeconds(timeCount)}
        </div>
    </div>
}

export default Timer


