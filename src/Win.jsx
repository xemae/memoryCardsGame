import React from "react";
import {useSelector} from "react-redux";

const Win = (props) => {
    const {timeCount} = props
    const {removedItemIds, cards, attempts, successfulAttempts} = useSelector(state => state.toolkit)

    if (removedItemIds.length === cards.length) {
        return (
            <div>
                <h1>WIN WIN WIN WIN WIN WIN WINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN WIN WIN WIN WIN WIN WIN
                    WINWINWINWINWINWINWINWINWINWINWIN WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN WIN WIN WIN WIN WIN
                    WINWINWINWINWINWINWINWINWINWINWIN WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN
                    WINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWINWIN
                </h1>
                <div>
                    попытки: {attempts}
                </div>
                <div>
                    количество неудачных попыток: {attempts - successfulAttempts}
                </div>
                <div>
                    точность: {Math.round(Math.round(successfulAttempts) / Math.round(attempts) * 100)} %
                </div>
                <div>
                    вы справились за {timeCount}
                </div>
            </div>
        )
    }
}

export default Win