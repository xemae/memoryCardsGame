import s from "./app.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {timer} from "./redux-toolkit/toolkitSlice";

const Timer = (props) => {
    const time = useSelector(state => state.toolkit.time)
    const dispatch = useDispatch()

    React.useEffect(
        () => {
            setInterval(
                () => {
                    dispatch(timer(props.startButtonShowed))
                },
                1000
            )
        }, [dispatch, props.startButtonShowed]
    )

    if (props.startButtonShowed === false) {
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


