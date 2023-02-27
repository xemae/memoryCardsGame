import React from "react";
import {useSelector} from "react-redux";
import Card from "./Card";

const Cards = () => {
    const cards = useSelector(state => state.toolkit.cards)
    return cards.map(card => <Card card={card} key={card.id} />)
}

export default Cards