import {createSlice, current} from "@reduxjs/toolkit";
import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.jpeg'
import img4 from '../images/4.jpeg'
import img5 from '../images/5.png'
import img6 from '../images/6.jpeg'
import img7 from '../images/7.jpeg'
import img8 from '../images/8.webp'
import img9 from '../images/9.webp'
import img10 from '../images/10.webp'
import img11 from '../images/11.webp'
import img12 from '../images/12.webp'
import img13 from '../images/13.webp'
import img14 from '../images/14.jpeg'
import img15 from '../images/15.webp'
import img16 from '../images/16.jpeg'
import img17 from '../images/17.webp'
import img18 from '../images/18.webp'
import cards from "../Cards";



const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        time: [0, 0],
        currentCard: null,
        comparedCard: null,
        cards: [],
        showedItems: [],
        cardsArr1: [
            {
                id: 1,
                isShowed: false,
                image: img1,
            },
            {
                id: 2,
                isShowed: false,
                image: img2,
            },
            {
                id: 3,
                isShowed: false,
                image: img3,
            },

            // img1, img2,
            // img3, img4, img5, img6, img7, img8, img9,
            // img10, img11, img12, img13, img14, img15,img16, img17, img18
        ],
        cardsArr2: [
            {
                id: 19,
                isShowed: false,
                image: img1,
            },
            {
                id: 20,
                isShowed: false,
                image: img2,
            },
            {
                id: 21,
                isShowed: false,
                image: img3,
            },
            // img1, img2, img3,
            // img4, img5, img6, img7, img8, img9,
            // img10, img11, img12, img13, img14, img15,img16, img17, img18
        ],

    },
    reducers: {
        timer(state) {
            state.time[1]++
            if (state.time[1] > 59) {
                state.time[1] = 0
                state.time[0]++
            }
        },
        start(state) {
            state.cards.push(...state.cardsArr1, ...state.cardsArr2)
            state.cards.sort(() => Math.random()-0.5)
        },
        showCard(state, action) {
            // console.log(action.payload)
            let item = state.cards.find(i => i.id === action.payload.id)

            item.isShowed = !item.isShowed
            // state.cards.find(i => i.id === action.payload.id).isShowed =
            //     !state.cards.find(i => i.id === action.payload.id).isShowed

            state.showedItems.push(item)
            state.showedItems[0] === state.showedItems[1]
                ? state.cards.find(i => i.image === action.payload.image)
                : state.showedItems.length = 0



            // console.log(current(state.cards))



        },
    },
})

export default toolkitSlice.reducer

export const {
    start, timer, showCard
} = toolkitSlice.actions
