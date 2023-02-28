import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "./app.module.css";
import {start} from "./redux-toolkit/toolkitSlice";


const Win = () => {
    const {removedItemIds, cards, attempts, successfulAttempts, time} = useSelector(state => state.toolkit)
    const dispatch = useDispatch()

    const [restartButtonShowed, setRestartButtonShowed] = useState(true)

    const RestartButton = () => {
        if (restartButtonShowed) {
            return <button className={s.start}
                           onClick={() => dispatch(start())
                               && setRestartButtonShowed(false)
                           }>
                start
            </button>
        }
    }

    function setSec() {
        if (time[1] < 10) {
            return '0' + time[1]
        } else {
            return time[1]
        }
    }

    function setMin() {
        if (time[0] < 10) {
            return '0' + time[0]
        } else {
            return time[0]
        }
    }

    if (removedItemIds.length === cards.length) {
        return (
            <div>
                <h1>WIN WIN WIN WIN WIN WIN WINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN
                    WIN WIN WIN WIN WIN WIN WINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN WIN WIN WIN WIN WIN WINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN
                </h1>
                <div>
                    попытки: {attempts}
                </div>
                <div>
                    точность: {Math.round(Math.round(successfulAttempts)/Math.round(attempts)*100)} %
                </div>
                <div>
                    {/*время: {setMin()} : {setSec()}*/}
                    время: {time}

                </div>

                <RestartButton />

            </div>
        )
    }

}

export default Win