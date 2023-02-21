import React, {useState} from "react";
import s from "./app.module.css";
import {useSelector} from "react-redux";

const Cover = () => {
    // const [coverShowed, setCoverShowed] = useState(true)
    const cards = useSelector(state => state.toolkit.cards)
    const covers = cards.map(i => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [coverShowed, setCoverShowed] = useState(true)

        return <div
            className={s.cover}
            key={Math.random()}
            // id={Math.random().toString()}
            style={{backgroundColor: coverShowed ? 'white' : '#af3f3f'}}
            onClick={() => setCoverShowed(false)}
        >
            {/*<div onClick={() => setCoverShowed(false)}*/}
            {/*     className={s.cover}*/}
            {/*     style={{backgroundColor: coverShowed ? 'white' : '#af3f3f'}}></div>*/}
        </div>
    })
    return covers
}

export default Cover