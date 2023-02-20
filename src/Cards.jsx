import React from "react";
import s from './app.module.css'
import {useDispatch, useSelector} from "react-redux";
import {showCard} from "./redux-toolkit/toolkitSlice";


const Cards = (props) => {

    // const [cardShowed, setCardShowed] = useState(false)
    const dispatch = useDispatch()
    const cards = useSelector(state => state.toolkit.cards)
    function finder (item, image) {
        cards.find(item.image === image)

    }

    const Items = props.cards.map(i => {

        return <div
            className={!i.isShowed ? s.card : s.open}
            key={Math.random()}
            // onClick={() => setCardShowed(true)}
            onClick={() => dispatch(showCard(i))}
        ><img src={i.image}/></div>
    })

    return Items
}

export default Cards