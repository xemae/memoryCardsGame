import s from "./app.module.css";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Timer = (props) => {
    const {removedItemIds, cards} = useSelector(state => state.toolkit)
    const [timeCount, setTimeCount] = useState([0, 0])

    useEffect(
        () => {
            if (props.startButtonShowed === false) {

                const timeOutId = setInterval(
                () => {
                        setTimeCount(prevTimeCount => [prevTimeCount[0], prevTimeCount[1] + 1])
                }, 1000
            )
                if (removedItemIds.length === cards.length) {
                    clearInterval(timeOutId)
                }

            }
        }, [props.startButtonShowed]
    )


    if (timeCount[1] > 59) {
        setTimeCount(prevTimeCount => [prevTimeCount[0] + 1, prevTimeCount[1] = 0])
    }

    if (props.startButtonShowed === false) {
        function setSec() {
            if (timeCount[1] < 10) {
                return '0' + timeCount[1]
            } else {
                return timeCount[1]
            }
        }

        function setMin() {
            if (timeCount[0] < 10) {
                return '0' + timeCount[0]
            } else {
                return timeCount[0]
            }
        }

        return <div className={s.container}>
            <div className={s.timer}>
                <div className={s.time}>{setMin()}</div>
                <div>:</div>
                <div className={s.time}>{setSec()}</div>
            </div>
        </div>
    }

}

export default Timer


